import { Link, useLocation } from 'react-router-dom';

export const ShowMoviesList = ({ movies, address }) => {
  const setLocation = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${address}${movie.id}`} state={{ from: setLocation }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
