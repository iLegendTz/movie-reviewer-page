import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { apiURL } from '../../api/API';

import { ApiResponseMessage } from '../../components/ApiResponseMessage';
import { textToComponent } from '../../utils/textToComponent';

import { useForm } from '../../hooks/useForm';

import styles from './styles.module.css';

export const Login = () => {
  const [apiResponse, setApiResponse] = useState({
    data: { message: '', code: '' },
    error: null,
    children: <></>,
  });

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
      .catch(({ response }) => response);

    if (response.status !== 200) {
      if (response.data === undefined) {
        setApiResponse({
          response: undefined,
          error: true,
          children: <>Error al conectar con el servidor intente mas tarde.</>,
        });

        return;
      }

      let children = <>{textToComponent(response.data.message)}</>;

      if (response.data.code === 'ER_NOT_ACTIVATED') {
        children = (
          <>
            {textToComponent(response.data.message)}
            Haz{' '}
            <span
              style={{ color: 'blue', cursor: 'pointer' }}
              onClick={handleResendEmail}
            >
              click aqui
            </span>{' '}
            para activarla
          </>
        );
      }

      setApiResponse({
        response: response.data,
        error: true,
        children: children,
      });
      return;
    }

    // TODO Guardar credenciales y completar el proceso de logueo
    console.log('login');
  };

  const handleResendEmail = async (e) => {
    e.preventDefault();

    setApiResponse({
      data: { message: '', code: '' },
      error: null,
      children: <></>,
    });

    const response = await axios
      .post(`${apiURL}/users/resend-activation-email`, {
        email: email,
      })
      .then((value) => value)
      .catch(({ response }) => response);

    if (response.status !== 200) {
      if (response.data === undefined) {
        setApiResponse({
          response: undefined,
          error: true,
          children: <>Error al conectar con el servidor intente mas tarde.</>,
        });

        return;
      }

      setApiResponse({
        response: response.data,
        error: true,
        children: textToComponent(response.data.message),
      });

      return;
    }

    setApiResponse({
      response: response.data,
      error: false,
      children: textToComponent(response.data.message),
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.login_form}>
        <ApiResponseMessage apiResponse={apiResponse} />
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
