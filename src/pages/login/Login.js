import React from 'react';

import styles from './styles.module.css';

export const Login = () => {
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
          />
        </div>

        <div className="w-100 mb-3">
          <button className="btn btn-primary w-100" type={'submit'}>
            Login
          </button>
        </div>

        <p className="text-center">
          No tienes una cuenta? <a href="#">Registrate!</a>
        </p>
      </form>
    </div>
  );
};
