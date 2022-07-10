import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';

import { ApiResponseMessage } from '../../components/ApiResponseMessage';
import { textToComponent } from '../../utils/textToComponent';

import { apiURL } from '../../api/API';

import styles from './styles.module.css';

export const ActivateAccount = () => {
  const [searchParams] = useSearchParams();
  const { token } = Object.fromEntries([...searchParams]);

  const [apiResponse, setApiResponse] = useState({
    data: { message: '', code: '' },
    error: null,
    children: <></>,
  });

  useEffect(() => {
    const handleActivated = async () => {
      const response = await axios
        .get(`${apiURL}/users/activate-user`, {
          params: { token: token },
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
        children: (
          <>
            {textToComponent(response.data.message)}{' '}
            <Link to={'/login'}>Regresar</Link>
          </>
        ),
      });
    };
    handleActivated();
  }, [token]);

  return (
    <div className={styles.container}>
      <ApiResponseMessage apiResponse={apiResponse} />
    </div>
  );
};
