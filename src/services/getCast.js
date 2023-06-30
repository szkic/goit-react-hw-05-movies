import axios from 'axios';
import { API_KEY } from './API';

export const getCast = async movieId => {
  const cast = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  return cast.data.cast;
};
