import React from 'react';

import black_background from '../assets/black_background.png';

// Sizes "w92","w154","w185","w342","w500","w780","original"
// Los sizes se enlistan en https://api.themoviedb.org/3/configuration en la variable "poster_sizes"
export const Poster = ({ size = 'original', filePath, styles }) => {
  if (!filePath) {
    return (
      <img className={`${styles}`} src={`${black_background}`} alt={'poster'} />
    );
  }

  return (
    <img
      className={`${styles}`}
      src={`https://image.tmdb.org/t/p/${size}/${filePath}`}
      alt={'poster'}
    />
  );
};
