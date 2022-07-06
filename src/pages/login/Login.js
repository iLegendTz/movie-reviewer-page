import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { apiURL } from '../../api/API';

import { useForm } from '../../hooks/useForm';

import styles from './styles.module.css';

export const Login = () => {
  const {
    form: { email, password },
    handleFormChange,
  } = useForm({ email: '', password: '' });

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await axios
      .post(`${apiURL}/users/login`, {
        email: email,
        password: password,
      })
      .then((value) => value)
      .catch((error) => {
        const { response } = error;

        return response;
      });
  };

  return (
    <div className={styles.container}>
      <form className={styles.login_form}>
        <h2 className="text-center mb-3">Iniciar sesion</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Correo electronico
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            type={'email'}
            placeholder="example@correo.com"
            value={email}
            onChange={handleFormChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            name="password"
            type={'password'}
            placeholder="password"
            value={password}
            onChange={handleFormChange}
          />
        </div>

        <div className="w-100 mb-3">
          <button
            className="btn btn-primary w-100"
            type={'submit'}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>

        <p className="text-center">
          No tienes una cuenta? <Link to={'/register'}>Registrate!</Link>
        </p>
      </form>
    </div>
  );
};
