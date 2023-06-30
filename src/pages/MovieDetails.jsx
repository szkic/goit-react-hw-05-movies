import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = ({ movies, genres, getId }) => {
  const { id } = useParams();

  // getId(id);

  const getMovieById = movieId => movies.find(movie => movie.id === movieId);

  const findGenre = genreId => genres.find(genre => genre.id === genreId);

  const movie = getMovieById(+id);

  console.log(movie);

  return (
    <>
      <button>Go back</button>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '30px' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={250}
          />
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average * 10} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {movie.genre_ids.map(genre => {
              return <p key={genre}>{findGenre(genre).name}</p>;
            })}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </>
  );
};
