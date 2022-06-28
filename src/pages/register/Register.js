import React from 'react';

import styles from './styles.module.css';

export const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.register_form}>
        <h2 className="text-center mb-3">Registrate</h2>
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

        <div className="mb-3">
          <label className="form-label" htmlFor="password2">
            Confirmar password
          </label>
          <input
            className="form-control"
            id="password2"
            name="password2"
            type={'password2'}
            placeholder="confirmar password"
          />
        </div>

        <div className="w-100 mb-3">
          <button className="btn btn-primary w-100" type={'submit'}>
            Registrarse
          </button>
        </div>

        <p className="text-center">
          Tienes una cuenta? <a href="#">Inicia sesion!</a>
        </p>
      </form>
    </div>
  );
};
