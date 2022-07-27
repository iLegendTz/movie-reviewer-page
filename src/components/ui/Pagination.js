import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Pagination = ({ page, totalPages }) => {
  const [currentQueryParameters, setSearchParams] = useSearchParams();

  const handlePage = (e) => {
    e.preventDefault();

    currentQueryParameters.set('page', e.target.value);
    setSearchParams(currentQueryParameters);
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <PageItems
          page={page}
          totalPages={totalPages}
          handlePage={handlePage}
        />
      </ul>
    </nav>
  );
};

const PageItems = ({ page, totalPages, handlePage }) => {
  if (totalPages === 1) {
    return (
      <li className="page-item active">
        <button className="page-link" type={'button'} value={page}>
          {page}
        </button>
      </li>
    );
  }

  if (page === 1) {
    return (
      <>
        <li className="page-item active">
          <button className="page-link" type={'button'} value={page}>
            {page}
          </button>
        </li>

        <li className="page-item">
          <button
            className="page-link"
            type={'button'}
            onClick={handlePage}
            value={page + 1}
          >
            {page + 1}
          </button>
        </li>

        {page + 2 <= totalPages && (
          <li className="page-item">
            <button
              className="page-link"
              type={'button'}
              onClick={handlePage}
              value={page + 2}
            >
              {page + 2}
            </button>
          </li>
        )}
      </>
    );
  }

  return (
    <>
      {page - 1 >= 1 && (
        <li className="page-item">
          <button
            className="page-link"
            type={'button'}
            onClick={handlePage}
            value={page - 1}
          >
            {page - 1}
          </button>
        </li>
      )}

      <li className="page-item active">
        <button className="page-link" type={'button'} value={page}>
          {page}
        </button>
      </li>

      {page + 1 <= totalPages && (
        <li className="page-item">
          <button
            className="page-link"
            type={'button'}
            onClick={handlePage}
            value={page + 1}
          >
            {page + 1}
          </button>
        </li>
      )}
    </>
  );
};
