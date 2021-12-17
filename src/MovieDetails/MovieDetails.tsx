import React,{useEffect, useState} from 'react';
import {Spinner} from '../Spinner/Spinner';
import {get} from '../httpClient';
import stl from './MovieDetails.module.css';
import {useParams} from 'react-router-dom';

interface Movie {
	title:string;
	id:number;
	poster_path:string;
	overview:string;
	genres:Genre[];
}
interface Genre {
	name:string;
}

export const MovieDetails:React.FC = () => {

	const {movieId} = useParams<{movieId: string}>();
	const [isLoading,setIsLoading] = useState(true);
	const [movie,setMovie] = useState<Movie|null>(null);

	useEffect(() => {
		get('/movie/'+ movieId)
			.then(data => {
				setIsLoading(false);
				setMovie(data);
			});
	},[movieId]);

	if(isLoading) return <Spinner/>

	if (!movie) return null;

	const imUrl = 'https://image.tmdb.org/t/p/w500'+movie.poster_path;
	
	return (
		<div className={stl.detContainer}>
			<img className={`${stl.column} ${stl.movImg}`} src={imUrl} alt={movie.title}/>
			<div className={`${stl.column} ${stl.movDesc}`}>
				<p className={stl.firstP}><strong>Title:</strong> {movie.title}</p>
				<p><strong>Description:</strong> {movie.overview}</p>
				<p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
			</div>
		</div>
	);
}