import React from 'react';

import { usePopularMovies } from '../hooks/usePopularMovies';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';

import { Poster } from './Poster';

import styles from '../styles/components/CarouselStyles.module.css';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';

export const MoviesCarousel = () => {
  // const { popular, topRated, latest } = useMovie({ type: type, page: 1 });
  const { popularMovies } = usePopularMovies({ page: 1 });
  const { nowPlayingMovies } = useNowPlayingMovies({ page: 1 });
  const { topRatedMovies } = useTopRatedMovies({ page: 1 });

  return (
    <>
      <Carousel movies={popularMovies} />
      <Carousel movies={nowPlayingMovies} />
      <Carousel movies={topRatedMovies} />
    </>
  );
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
