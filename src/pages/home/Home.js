import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { MoviesCarousel } from '../../components/carousels/MoviesCarousel';
import { TvShowsCarousel } from '../../components/carousels/TvShowsCarousel';
import { SearchBar } from '../../components/ui/SearchBar';

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
