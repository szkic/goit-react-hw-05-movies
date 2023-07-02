import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/API';
import { Suspense, useEffect, useState } from 'react';
import { MovieInfo, Wrapper, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  const link = location.state?.from ?? '/';

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const movieDetails = await getMovieDetails(id);
        setMovieDetails(movieDetails);
        setGenres(movieDetails.genres);
      } catch (error) {
        console.log(error);
      }
    };
    asyncFunc();
  }, [id]);

  return (
    <>
      <Link to={link}>
        <Button>← Go back</Button>
      </Link>
      <Wrapper>
        <MovieInfo>
          <img
            src={
              movieDetails.poster_path !== null
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
            }
            alt={movieDetails.title}
            width={250}
          />
        </MovieInfo>
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
      </Wrapper>
      <hr />
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: link }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: link }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
