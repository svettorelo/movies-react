import * as React from "react";
import stl from './MovieCard.module.css';
import {Link} from 'react-router-dom';

interface Movie{
	title:string;
	id:number;
	poster_path:string;
	overview:string;
	genres:Genre[];
}
interface Genre {
	name:string;
}

export const MovieCard:React.FC<{ movie:Movie }> = ({movie}) => {
	const imUrl:string = 'https://image.tmdb.org/t/p/w300'+movie.poster_path;

	return (
		<li className={stl.mov}>
			<Link to={'/movies/'+movie.id}>
				<img width={230} height={345} className={stl.movImg} src={imUrl} alt={movie.title}/>
			</Link>
			<div className={stl.movTitle}>{movie.title}</div>
		</li>
	)
}