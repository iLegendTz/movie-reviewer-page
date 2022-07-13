import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../api/MovieDBAPI';

export const useOnTheAirTvShows = ({ page }) => {
  const [onTheAirTvShows, setOnTheAirTvShows] = useState([]);

  const searchOnTheAirTvShows = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/tv/on_the_air`, {
        params: {
          language: 'es-MX',
          region: 'US',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setOnTheAirTvShows(response.data.results);
  };

  useEffect(() => {
    searchOnTheAirTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { onTheAirTvShows };
};
