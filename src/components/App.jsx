import { fetchMovies } from 'services/API';
import { Trending } from '../pages/Trending';
import { Movies } from 'pages/Movies/Movies';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Header';
import { NotFound } from 'pages/NotFound';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const moviesFromApi = await fetchMovies();
        const moviesList = moviesFromApi.map(movies => movies);
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunc();
  }, []);

  return (
    <>
      <Main />

      <Routes>
        <Route path="/" element={<Trending showMovies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="movies/:id"
          element={<MovieDetails showMovies={movies} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
