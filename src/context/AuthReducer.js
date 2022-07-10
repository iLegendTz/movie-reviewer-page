import { authTypes } from '../types/AuthTypes';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };

    case authTypes.logout:
      return { logged: false };

    default:
      return state;
  }
};
