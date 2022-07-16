import React from 'react';

// Sizes "w92","w154","w185","w342","w500","w780","original"
// Los sizes se enlistan en https://api.themoviedb.org/3/configuration en la variable "poster_sizes"
export const Poster = ({ size = 'original', filePath, styles }) => {
  return (
    <img
      className={`${styles}`}
      src={`https://image.tmdb.org/t/p/${size}/${filePath}`}
      alt={'poster'}
    />
  );
};
