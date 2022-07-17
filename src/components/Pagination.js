import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const Pagination = ({ page }) => {
  // eslint-disable-next-line no-unused-vars
  const [currentQueryParameters, setSearchParams] = useSearchParams();
  const newQueryParams = new URLSearchParams();

  const handlePage = (e) => {
    e.preventDefault();
  };

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <Link class="page-link" to={'/'}>
            Previous
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to={'/'}>
            1
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to={'/'}>
            2
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to={'/'}>
            3
          </Link>
        </li>
        <li class="page-item">
          <Link class="page-link" to={'/'}>
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};
