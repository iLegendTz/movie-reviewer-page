import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../../api/MovieDBAPI';

export const useSearchTvShows = ({ query, page }) => {
  const [tvShows, setTvShows] = useState([]);

  const searchTvShows = async () => {
    const response = await axios
      .get(`${apiURLMovieDB}/search/tv`, {
        params: {
          query: query,
          language: 'es-MX',
          page: page,
          api_key: apiKeyMovieDB,
        },
      })
      .then((response) => response)
      .catch((error) => error);

    setTvShows(response.data);
  };

  useEffect(() => {
    searchTvShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);

  return { tvShows };
};
