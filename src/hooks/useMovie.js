import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import { apiKeyMovieDB, apiURLMovieDB } from '../api/MovieDBAPI';

export const useMovie = ({ type = 'popular', page = 1 }) => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

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

    setPopular(response.data.results);
  };

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

    setTopRated(response.data.results);
  };

  const searchNowPlaying = async () => {
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

    setNowPlaying(response.data.results);
  };

  useEffect(() => {
    switch (type) {
      case 'popular':
        searchPopularMovies();
        break;

      case 'top_rated':
        searchTopRatedMovies();
        break;

      case 'now_playing':
        searchNowPlaying();
        break;

      default:
        searchPopularMovies();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { popular, topRated, nowPlaying };
};
