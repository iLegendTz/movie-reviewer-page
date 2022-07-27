import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../../api/MovieDBAPI';

export const usePopularMovies = ({ page }) => {
  const [popularMovies, setPopularMovies] = useState([]);

  const searchPopularMovies = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/movie/popular`, {
        params: {
          language: 'es-MX',
          region: 'US',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setPopularMovies(response.data);
  };

  useEffect(() => {
    searchPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { popularMovies };
};
