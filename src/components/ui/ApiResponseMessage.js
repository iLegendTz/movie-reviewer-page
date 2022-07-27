import React from 'react';

import { ErrorMessage } from './ErrorMessage';
import { SuccessMessage } from './SuccessMessage';

export const ApiResponseMessage = ({ apiResponse }) => {
  switch (apiResponse.error) {
    case false:
      return <SuccessMessage>{apiResponse.children}</SuccessMessage>;

    case true:
      return <ErrorMessage>{apiResponse.children}</ErrorMessage>;

    default:
      return <></>;
  }
};
