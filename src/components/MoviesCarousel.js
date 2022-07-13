import React, { useEffect } from 'react';

import { usePopularMovies } from '../hooks/usePopularMovies';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';

import { Poster } from './Poster';

import {
  hideCarousels,
  removeClassActiveToCarouselTabs,
} from '../utils/carousel';

import styles from '../styles/components/CarouselStyles.module.css';

export const MoviesCarousel = () => {
  const { popularMovies } = usePopularMovies({ page: 1 });
  const { nowPlayingMovies } = useNowPlayingMovies({ page: 1 });
  const { topRatedMovies } = useTopRatedMovies({ page: 1 });

  const handleTab = (e, carouselId) => {
    hideCarousels(document.getElementsByName(`carousel_movies`));
    removeClassActiveToCarouselTabs(
      document.getElementsByName(`tabs_movies`),
      styles.carousel_tab_active
    );

    const selectedCarousel = document.getElementById(carouselId);
    const selectedTab = e.target;

    selectedCarousel.classList.remove('d-none');
    selectedTab.classList.add(styles.carousel_tab_active);
  };

  useEffect(() => {
    hideCarousels(document.getElementsByName(`carousel_movies`));
    removeClassActiveToCarouselTabs(
      document.getElementsByName(`tabs_movies`),
      styles.carousel_tab_active
    );

    document
      .getElementById(`carousel_popular_movies`)
      .classList.remove(`d-none`);
    document
      .getElementById(`tab_popular_movies`)
      .classList.add(styles.carousel_tab_active);
  }, []);

  return (
    <div className={styles.carousel_container}>
      <ul className="list-group list-group-horizontal">
        <li
          id={`tab_popular_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, 'carousel_popular_movies')}
        >
          Populares
        </li>
        <li
          id={`tab_now_playing_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, 'carousel_now_playing_movies')}
        >
          En cines
        </li>
        <li
          id={`tab_top_rated_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, 'carousel_top_rated_movies')}
        >
          Mejor calificadas
        </li>
      </ul>

      <Carousel movies={popularMovies} id={`carousel_popular_movies`} />
      <Carousel movies={nowPlayingMovies} id={`carousel_now_playing_movies`} />
      <Carousel movies={topRatedMovies} id={`carousel_top_rated_movies`} />
    </div>
  );
};

const Carousel = ({ movies, id }) => {
  return (
    <div className={`${styles.carousel}`} name={`carousel_movies`} id={id}>
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
