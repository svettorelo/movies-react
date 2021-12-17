import stl from './App.module.css';
import { MoviesGrid } from './MoviesGrid/MoviesGrid.jsx';
import { MovieDetails } from './MovieDetails/MovieDetails.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from "react";
export const App = () => {
    return (<BrowserRouter>
      <div className={stl.container}>
        <header>
          <Link to="/">
            <h1>Movies</h1>
          </Link>
          <main>
            <Route exact path='/movies/:movieId'>
              <MovieDetails />
            </Route>
            <Route exact path='/'>
              <MoviesGrid />
            </Route>
          </main> 
        </header>
      </div>
    </BrowserRouter>);
};
//https://www.youtube.com/watch?v=eXSP524SBgw  otro proyecto
