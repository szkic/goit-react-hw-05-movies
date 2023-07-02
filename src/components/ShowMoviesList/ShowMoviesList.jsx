import { Link, useLocation } from 'react-router-dom';

export const ShowMoviesList = ({ movies, navigate }) => {
  const setLocation = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${navigate}${movie.id}`} state={{ from: setLocation }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
