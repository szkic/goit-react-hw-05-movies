import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/API';

import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  const link = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(id)
      .then(response => {
        setMovieDetails(response);
        setGenres(response.genres);
      })
      .catch(error => console.log(error));
  }, [id]);

  return (
    <>
      <Link to={link}>
        <button>← Go back</button>
      </Link>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '30px' }}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            width={250}
          />
        </div>
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User score: {movieDetails.vote_average * 10} %</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
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
