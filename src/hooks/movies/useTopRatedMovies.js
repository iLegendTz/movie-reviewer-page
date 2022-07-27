import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../../api/MovieDBAPI';

export const useTopRatedMovies = ({ page }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const searchTopRatedMovies = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/movie/top_rated`, {
        params: {
          language: 'es-MX',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setTopRatedMovies(response.data);
  };

  useEffect(() => {
    searchTopRatedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { topRatedMovies };
};
