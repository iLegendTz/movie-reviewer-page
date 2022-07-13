import React, { useEffect, useState } from 'react';

import { usePopularMovies } from '../hooks/usePopularMovies';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies';

import { Poster } from './Poster';

import { removeClassActiveToCarouselTabs } from '../utils/carousel';

import styles from '../styles/components/CarouselStyles.module.css';

export const MoviesCarousel = () => {
  const { popularMovies } = usePopularMovies({ page: 1 });
  const { nowPlayingMovies } = useNowPlayingMovies({ page: 1 });
  const { topRatedMovies } = useTopRatedMovies({ page: 1 });

  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleTab = (e, movies) => {
    removeClassActiveToCarouselTabs(
      document.getElementsByName(`tabs_movies`),
      styles.carousel_tab_active
    );
    const selectedTab = e.target;
    selectedTab.classList.add(styles.carousel_tab_active);

    setSelectedMovies(movies);
  };

  useEffect(() => {
    removeClassActiveToCarouselTabs(
      document.getElementsByName(`tabs_movies`),
      styles.carousel_tab_active
    );
    document
      .getElementById(`tab_popular_movies`)
      .classList.add(styles.carousel_tab_active);

    setSelectedMovies(popularMovies);
  }, [popularMovies]);

  return (
    <div className={styles.carousel_container}>
      <ul className="list-group list-group-horizontal">
        <li
          id={`tab_popular_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, popularMovies)}
        >
          Populares
        </li>
        <li
          id={`tab_now_playing_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, nowPlayingMovies)}
        >
          En cines
        </li>
        <li
          id={`tab_top_rated_movies`}
          name={`tabs_movies`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, topRatedMovies)}
        >
          Mejor calificadas
        </li>
      </ul>

      <Carousel movies={selectedMovies} />
    </div>
  );
};

const Carousel = ({ movies }) => {
  return (
    <div className={`${styles.carousel}`}>
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

const MovieItem = ({ title, poster_path, overview }) => {
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
