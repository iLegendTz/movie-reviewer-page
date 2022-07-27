import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../../api/MovieDBAPI';

export const usePopularTvShows = ({ page }) => {
  const [popularTvShows, setPopularTvShows] = useState([]);

  const searchPopularTvShows = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/tv/popular`, {
        params: {
          language: 'es-MX',
          region: 'US',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setPopularTvShows(response.data);
  };

  useEffect(() => {
    searchPopularTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { popularTvShows };
};
