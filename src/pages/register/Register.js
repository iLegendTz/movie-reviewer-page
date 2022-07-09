import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { apiURL } from '../../api/API';

import { textToComponent } from '../../utils/textToComponent';

import { useForm } from '../../hooks/useForm';

import { ApiResponseMessage } from '../../components/ApiResponseMessage';

import styles from './styles.module.css';

export const Register = () => {
  const [apiResponse, setApiResponse] = useState({
    data: { message: '', code: '' },
    error: null,
    children: <></>,
  });

  const {
    form: { username, email, password, password2 },
    setForm,
    handleFormChange,
  } = useForm({ username: '', email: '', password: '', password2: '' });

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setApiResponse({
        data: {
          message: 'Los passwords no concuerdan, verifica los campos',
          code: 'ER_PASSWORD_NO_MATCH',
        },
        error: true,
        children: <>Los passwords no concuerdan, verifica los campos</>,
      });

      return;
    }

    const response = await axios
      .post(`${apiURL}/users/`, {
        username: username,
        email: email,
        password: password,
      })
      .then((value) => value)
      .catch(({ response }) => response);

    console.log(response);

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

    setForm({ username: '', email: '', password: '', password2: '' });
  };

  return (
    <div className={styles.container}>
      <form className={styles.register_form}>
        <ApiResponseMessage apiResponse={apiResponse} />
        <h2 className="text-center mb-3">Registrate</h2>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Nombre de usuario
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            type={'text'}
            placeholder="username"
            value={username}
            onChange={handleFormChange}
          />
          <small id="usernameHelp" className="form-text text-muted">
            Tu username debe contener al menos 5 caracteres.
          </small>
        </div>

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
          <small id="passwordHelp" className="form-text text-muted">
            Tu password debe de ser de al menos 6 caracteres.
          </small>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password2">
            Confirmar password
          </label>
          <input
            className="form-control"
            id="password2"
            name="password2"
            type={'password'}
            placeholder="confirmar password"
            value={password2}
            onChange={handleFormChange}
          />
        </div>

        <div className="w-100 mb-3">
          <button
            className="btn btn-primary w-100"
            type={'submit'}
            onClick={handleRegister}
          >
            Registrarse
          </button>
        </div>

        <p className="text-center">
          Tienes una cuenta? <Link to={'/login'}>Inicia sesion!</Link>
        </p>
      </form>
    </div>
  );
};
