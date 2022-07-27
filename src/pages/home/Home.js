import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { MoviesCarousel } from '../../components/MoviesCarousel';
import { SearchBar } from '../../components/SearchBar';
import { TvShowsCarousel } from '../../components/TvShowsCarousel';

export const Home = () => {
  const navigate = useNavigate();

  const fn_search = (query) => {
    navigate({
      pathname: '/search',
      search: createSearchParams({ query: query }).toString(),
    });
  };

  return (
    <div className="container">
      <SearchBar fn_search={fn_search} />

      <div className="mb-2">
        <h2>Peliculas</h2>
        <MoviesCarousel />
      </div>

      <div className="mb-2">
        <h2>Programas de TV</h2>
        <TvShowsCarousel />
      </div>
    </div>
  );
};
