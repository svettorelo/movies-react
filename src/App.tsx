import stl from './App.module.css';
import {MoviesGrid} from './MoviesGrid/MoviesGrid';
import {MovieDetails} from './MovieDetails/MovieDetails';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import * as React from "react";

export const App:React.FC = () => {
  return (
    <BrowserRouter>
      <div className={stl.container}>
        <header>
          <Link to="/">
            <h1>Movies</h1>
          </Link>
          <main>
            <Route exact path='/movies/:movieId'>
              <MovieDetails/>
            </Route>
            <Route exact path='/'>
              <MoviesGrid />
            </Route>
          </main> 
        </header>
      </div>
    </BrowserRouter>
  );
}

//https://www.youtube.com/watch?v=eXSP524SBgw  otro proyecto
