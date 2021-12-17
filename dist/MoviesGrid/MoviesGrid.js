import React, { useEffect, useState } from 'react';
import { Spinner } from '../Spinner/Spinner.jsx';
import { get } from '../httpClient.js';
import { MovieCard } from '../MovieCard/MovieCard.jsx';
import stl from './MoviesGrid.module.css';
export const MoviesGrid = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        get('/discover/movie')
            .then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
    }, []);
    if (isLoading)
        return <Spinner />;
    return (<ul className={stl.movGrid}>
			{movies.map((mov) => (<MovieCard key={mov.id} movie={mov}/>))}
		</ul>);
};
//https://youtu.be/3z-Y4kbLrTM?t=2787 SEGUIR ACA
