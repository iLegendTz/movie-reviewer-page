import React from 'react';

import { MoviesCarousel } from '../../components/MoviesCarousel';
import { SearchBar } from '../../components/SearchBar';
import { TvShowsCarousel } from '../../components/TvShowsCarousel';

export const Home = () => {
  return (
    <div className="container">
      <SearchBar />

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
