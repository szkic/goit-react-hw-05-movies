import { SearchInput } from 'components/SearchInput/SearchInput';
import { ShowMoviesList } from 'components/ShowMoviesList/ShowMoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState([]);
  const movieName = searchParams.get('movieName') ?? '';

  useEffect(() => {
    searchMovies(movieName)
      .then(response => setMoviesList(response))
      .catch(error => console.log(error));
  }, [movieName, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
  };

  return (
    <>
      <SearchInput onSubmit={handleSubmit} />
      <ShowMoviesList movies={moviesList} navigate={''} />
    </>
  );
};

export default Movies;
