import { ShowMoviesList } from 'components/ShowMoviesList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';

export const Trending = () => {
  const [movies, setMovies] = useState([]);
  const address = 'movies/';

  useEffect(() => {
    fetchMovies()
      .then(response => setMovies(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ShowMoviesList movies={movies} address={address} />
    </>
  );
};
