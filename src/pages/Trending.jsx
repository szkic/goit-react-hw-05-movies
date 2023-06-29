import { Link } from 'react-router-dom';

export const Trending = ({ showMovies }) => {
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {showMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
