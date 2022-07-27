import React, { useEffect } from 'react';

import { useForm } from '../hooks/useForm';

export const SearchBar = ({ initialQuery = '', fn_search }) => {
  const {
    form: { query },
    handleFormChange,
  } = useForm({ query: initialQuery });

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query || query === '') {
      return;
    }

    fn_search(query);
  };

  useEffect(() => {
    const btnSearch = document.getElementById('btn_search');
    if (!query || query === '') {
      btnSearch.classList.add('disabled');
    } else {
      btnSearch.classList.remove('disabled');
    }
  }, [query]);

  return (
    <form className="mb-4" onSubmit={handleSearch}>
      <div className="input-group">
        <input
          className="form-control rounded"
          name="query"
          id="query"
          value={query}
          onChange={(e) => {
            e.target.value = e.target.value.trim();
            handleFormChange(e);
          }}
          type="search"
          placeholder="Buscar pelicula o serie de tv"
          aria-label="Buscar pelicula o serie de tv"
          aria-describedby="search-addon"
        />
        <button
          id="btn_search"
          className="btn btn-primary"
          type={'button'}
          onClick={handleSearch}
        >
          search
        </button>
      </div>
    </form>
  );
};
