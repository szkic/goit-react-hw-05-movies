import axios from 'axios';

const API_KEY = '0f491ec6049bcb04899074faaad34967';
const URL = `https://api.themoviedb.org/3/trending/movie/day`;

export const fetchMovies = async () => {
  const response = await axios.get(URL, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};
