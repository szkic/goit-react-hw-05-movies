import { ShowMoviesList } from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';

export const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(response => setMovies(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ShowMoviesList movies={movies} navigate={'movies/'} />
    </>
  );
};
