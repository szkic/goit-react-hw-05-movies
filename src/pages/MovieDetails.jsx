import { useParams } from 'react-router-dom';

export const MovieDetails = ({ showMovies }) => {
  const { id } = useParams();

  const getMovieById = movieId => {
    return showMovies.find(movie => movie.id === movieId);
  };

  const movie = getMovieById(+id);
  console.log(movie);

  return (
    <>
      <button>Go back</button>
      <div>
        <h2>{movie.title}</h2>
        <p>User score: %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        {movie.genre_ids.map(genre => {
          return <p>{genre}</p>;
        })}
      </div>
    </>
  );
};
