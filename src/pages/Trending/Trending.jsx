import { ShowMoviesList } from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'services/API';

const Trending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        setMovies(await fetchMovies());
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ShowMoviesList movies={movies} navigate={'movies/'} />
    </>
  );
};

export default Trending;
