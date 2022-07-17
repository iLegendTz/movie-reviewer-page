import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiKeyMovieDB, apiURLMovieDB } from '../api/MovieDBAPI';

export const useSearchMovies = ({ query, page }) => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/search/movie`, {
        params: {
          query: query,
          language: 'es-MX',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setMovies(response.data);
  };

  useEffect(() => {
    searchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  return { movies };
};
