import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Poster } from '../../components/Poster';
import { SearchBar } from '../../components/ui/SearchBar';
import { Pagination } from '../../components/ui/Pagination';

import { useSearchMovies } from '../../hooks/movies/useSearchMovies';
import { useSearchTvShows } from '../../hooks/tv-shows/useSearchTvShows';

import stylesItemPreview from '../../styles/components/ItemPreview.module.css';
import stylesTab from '../../styles/components/Tab.module.css';

export const Search = () => {
  const navigate = useNavigate();
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState('tab_movies');

  const query = currentQueryParameters.get('query');
  const page = currentQueryParameters.get('page')
    ? currentQueryParameters.get('page')
    : 1;

  const { movies } = useSearchMovies({ query: query, page: page });
  const { tvShows } = useSearchTvShows({ query: query, page: page });

  const handleTab = (e) => {
    document
      .getElementsByName(`tab`)
      .forEach((element) => element.classList.remove(stylesTab.tab_active));

    const selectedTab = e.target.id;

    if (selectedTab === 'tab_movies' || selectedTab === 'span_movies') {
      document.getElementById('tab_movies').classList.add(stylesTab.tab_active);
      setSelectedTab('tab_movies');
    } else {
      document
        .getElementById('tab_tv_shows')
        .classList.add(stylesTab.tab_active);
      setSelectedTab('tab_tv_shows');
    }

    currentQueryParameters.set('page', 1);
    setSearchParams(currentQueryParameters);
  };

  const fn_search = (query) => {
    currentQueryParameters.set('query', query);
    currentQueryParameters.set('page', 1);
    setSearchParams(currentQueryParameters);
  };

  useEffect(() => {
    document
      .getElementsByName(`tab`)
      .forEach((element) => element.classList.remove(stylesTab.tab_active));

    document.getElementById(`tab_movies`).classList.add(stylesTab.tab_active);
  }, []);

  useEffect(() => {
    if (!query || query === '') {
      navigate({ pathname: '/' }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="container">
      <SearchBar initialQuery={query} fn_search={fn_search} />

      <div className="row">
        <div className="col-2">
          <ul className="list-group">
            <li
              className={`list-group-item ${stylesTab.tab_hide}`}
              name={`tab`}
              id={`tab_movies`}
              onClick={handleTab}
            >
              <i className="bi bi-film"></i>
              <span id={`span_movies`}> Peliculas</span>
            </li>
            <li
              className={`list-group-item ${stylesTab.tab_hide}`}
              name={`tab`}
              id={`tab_tv_shows`}
              onClick={handleTab}
            >
              <i className="bi bi-tv"></i>
              <span id={`span_tv_shows`}> Series de TV</span>
            </li>
          </ul>
        </div>

        <div className="col-10">
          {selectedTab === 'tab_movies' ? (
            <>
              <MoviesComponent movies={movies} />
              <Pagination page={movies.page} totalPages={movies.total_pages} />
            </>
          ) : (
            <>
              <TvShowsComponent tvShows={tvShows} />
              <Pagination
                page={tvShows.page}
                totalPages={tvShows.total_pages}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const MoviesComponent = ({ movies }) => {
  if (!movies || movies.length !== 0) {
    return (
      <div className="row">
        {movies.results.map(({ id, poster_path, title, overview }) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" key={id}>
            <Poster
              size="w342"
              filePath={poster_path}
              styles={stylesItemPreview.item_poster}
            />
            <div>
              <h6 className={stylesItemPreview.item_title}>{title}</h6>
              <p className={stylesItemPreview.item_overview}>{overview}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <></>;
};

const TvShowsComponent = ({ tvShows }) => {
  if (!tvShows || tvShows.length !== 0) {
    return (
      <div className="row">
        {tvShows.results.map(({ id, name, overview, poster_path }) => (
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" key={id}>
            <Poster
              size="w342"
              filePath={poster_path}
              styles={stylesItemPreview.item_poster}
            />
            <div>
              <h6 className={stylesItemPreview.item_title}>{name}</h6>
              <p className={stylesItemPreview.item_overview}>{overview}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
