import axios from 'axios';
import { API_KEY } from './API';

const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list';

export const getGenres = async () => {
  const genres = await axios.get(GENRES_URL, {
    params: {
      api_key: API_KEY,
    },
  });

  return genres.data.genres;
};
