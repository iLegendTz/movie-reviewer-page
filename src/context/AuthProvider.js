import { useReducer } from 'react';
import { authTypes } from '../types/AuthTypes';
import { AuthContext } from './AuthContext';

import { authReducer } from './AuthReducer';

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return { logged: !!user, user: user };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (user = null) => {
    const action = {
      type: authTypes.login,
      payload: user,
    };

    dispatch(action);
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <AuthContext.Provider value={{ ...authState, onLogin: onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
