import React, {useEffect, useState} from 'react';
import {Spinner} from '../Spinner/Spinner';
import {get} from '../httpClient';
import {MovieCard} from '../MovieCard/MovieCard';
import stl from './MoviesGrid.module.css';

//'https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>'
//'https://api.themoviedb.org/3/movie/550?api_key=57537ff19f381dd7b67eee1ea8b8164a'

interface Movie{
	title:string;
	id:number;
	poster_path:string;
	genres:Genre[];
	overview:string;
}
interface Genre {
	name:string;
}

export const MoviesGrid:React.FC = () => {
	const [movies,setMovies] = useState([]);
	const [isLoading,setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		get('/discover/movie')
			.then(data => {
				setMovies(data.results);
				setIsLoading(false);
			});
	},[]);
	
	if(isLoading) return <Spinner/>

	return (
		<ul className={stl.movGrid}>
			{movies.map((mov:Movie) => (<MovieCard key={mov.id} movie={mov}/>))}
		</ul>
		)
}

//https://youtu.be/3z-Y4kbLrTM?t=2787 SEGUIR ACA