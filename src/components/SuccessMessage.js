import React from 'react';

export const SuccessMessage = ({ children }) => {
  return (
    <div className="alert alert-success" role="alert">
      {children}
    </div>
  );
};
