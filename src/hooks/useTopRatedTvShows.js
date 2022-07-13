import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../api/MovieDBAPI';

export const useTopRatedTvShows = ({ page }) => {
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);

  const searchTopRatedTvShows = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/tv/top_rated`, {
        params: {
          language: 'es-MX',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setTopRatedTvShows(response.data.results);
  };

  useEffect(() => {
    searchTopRatedTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { topRatedTvShows };
};
