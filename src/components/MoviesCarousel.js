import React from 'react';

import { useMovie } from '../hooks/useMovie';

import { Poster } from './Poster';

import styles from '../styles/components/CarouselStyles.module.css';

export const MoviesCarousel = ({ type = 'popular' }) => {
  const { popular, topRated, latest } = useMovie({ type: type, page: 1 });

  switch (type) {
    case 'popular':
      return <Carousel movies={popular} />;

    case 'top_rated':
      return <Carousel movies={topRated} />;

    case 'now_playing':
      return <Carousel movies={latest} />;

    default:
      return <Carousel movies={popular} />;
  }
};

const Carousel = ({ movies }) => {
  return (
    <div className={styles.carousel}>
      {movies.map((movie) => {
        return (
          <MovieItem
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        );
      })}
    </div>
  );
};

const MovieItem = ({ title, poster_path, vote_average, overview }) => {
  return (
    <div className={styles.carousel_item}>
      <Poster
        size="w342"
        filePath={poster_path}
        styles={styles.carousel_item_img}
      />
      <div className={`${styles.carousel_item_card_body}`}>
        <h6 className={styles.carousel_item_title}>{title}</h6>
        <p className={styles.carousel_item_overview}>{overview}</p>
      </div>
    </div>
  );
};
