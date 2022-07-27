import React, { useEffect, useState } from 'react';

import { Poster } from '../Poster';

import { usePopularTvShows } from '../../hooks/tv-shows/usePopularTvShows';
import { useOnTheAirTvShows } from '../../hooks/tv-shows/useOnTheAirTvShows';
import { useTopRatedTvShows } from '../../hooks/tv-shows/useTopRatedTvShows';

import styles from '../../styles/components/CarouselStyles.module.css';
import stylesItemPreview from '../../styles/components/ItemPreview.module.css';
import stylesTab from '../../styles/components/Tab.module.css';

export const TvShowsCarousel = () => {
  const { popularTvShows } = usePopularTvShows({ page: 1 });
  const { onTheAirTvShows } = useOnTheAirTvShows({ page: 1 });
  const { topRatedTvShows } = useTopRatedTvShows({ page: 1 });

  const [selectedTvShows, setSelectedTvShows] = useState([]);

  const handleTab = (e, tvShows) => {
    document
      .getElementsByName(`tabs_tv_shows`)
      .forEach((element) => element.classList.remove(stylesTab.tab_active));

    const selectedTab = e.target;
    selectedTab.classList.add(stylesTab.tab_active);

    setSelectedTvShows(tvShows);
  };

  useEffect(() => {
    document
      .getElementsByName(`tabs_tv_shows`)
      .forEach((element) => element.classList.remove(stylesTab.tab_active));

    document
      .getElementById(`tab_popular_tv_shows`)
      .classList.add(stylesTab.tab_active);

    setSelectedTvShows(popularTvShows);
  }, [popularTvShows]);

  return (
    <div className={styles.carousel_container}>
      <ul className="list-group list-group-horizontal">
        <li
          id={`tab_popular_tv_shows`}
          name={`tabs_tv_shows`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, popularTvShows)}
        >
          Populares
        </li>
        <li
          id={`tab_now_playing_tv_shows`}
          name={`tabs_tv_shows`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, onTheAirTvShows)}
        >
          En emision
        </li>
        <li
          id={`tab_top_rated_tv_shows`}
          name={`tabs_tv_shows`}
          className={`list-group-item`}
          onClick={(e) => handleTab(e, topRatedTvShows)}
        >
          Mejor calificadas
        </li>
      </ul>

      <Carousel tvShows={selectedTvShows.results} />
    </div>
  );
};

const Carousel = ({ tvShows }) => {
  if (!tvShows) {
    return <></>;
  }

  return (
    <div className={`${styles.carousel}`}>
      {tvShows.map((tvShow) => {
        return (
          <TvShowItem
            key={tvShow.id}
            name={tvShow.name}
            overview={tvShow.overview}
            poster_path={tvShow.poster_path}
          />
        );
      })}
    </div>
  );
};

const TvShowItem = ({ name, overview, poster_path }) => {
  return (
    <div className={styles.carousel_item}>
      <Poster
        size="w342"
        filePath={poster_path}
        styles={styles.carousel_item_img}
      />
      <div>
        <h6 className={stylesItemPreview.item_title}>{name}</h6>
        <p className={stylesItemPreview.item_overview}>{overview}</p>
      </div>
    </div>
  );
};
