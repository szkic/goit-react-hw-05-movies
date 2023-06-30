import { fetchMovies } from 'services/API';
import { Trending } from '../pages/Trending';
import { Movies } from 'pages/Movies/Movies';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from './Header';
import { NotFound } from 'pages/NotFound';
import { MovieDetails } from 'pages/MovieDetails';
import { getGenres } from 'services/getGenres';
import { Cast } from 'pages/Cast';
import { Reviews } from 'pages/Reviews';
import { getCast } from 'services/getCast';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const moviesFromApi = await fetchMovies();
        const moviesList = moviesFromApi.map(movies => movies);
        setMovies(moviesList);

        const genresFromApi = await getGenres();
        setGenres(genresFromApi);

        if (id !== 0) {
          const castFromApi = await getCast(id);
          setCast(castFromApi);
        }
      } catch (error) {
        console.log(error);
      }
    };

    asyncFunc();
  }, [id]);

  const getId = id => {
    if (id === undefined) return;
    setId(id);
  };

  return (
    <>
      <Main />

      <Routes>
        <Route path="/" element={<Trending showMovies={movies} />} />
        <Route path="/movies" element={<Movies />} />
        <Route
          path="/movies/:id"
          element={
            <MovieDetails movies={movies} genres={genres} getId={getId} />
          }
        >
          <Route path="cast" element={<Cast cast={cast} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
