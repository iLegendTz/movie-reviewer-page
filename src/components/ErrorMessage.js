import React from 'react';

export const ErrorMessage = ({ children }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {children}
    </div>
  );
};
