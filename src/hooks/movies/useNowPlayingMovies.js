import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../../api/MovieDBAPI';

export const useNowPlayingMovies = ({ page }) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const searchNowPlayingMovies = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/movie/now_playing`, {
        params: {
          language: 'es-MX',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setNowPlayingMovies(response.data);
  };

  useEffect(() => {
    searchNowPlayingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { nowPlayingMovies };
};
