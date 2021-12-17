import React from "react";
import stl from './MovieCard.module.css';
import { Link } from 'react-router-dom';
export const MovieCard = ({ movie }) => {
    const imUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (<li className={stl.mov}>
			<Link to={'/movies/' + movie.id}>
				<img width={230} height={345} className={stl.movImg} src={imUrl} alt={movie.title}/>
			</Link>
			<div className={stl.movTitle}>{movie.title}</div>
		</li>);
};
