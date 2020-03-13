import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import LoadingSpinner from '../../components/LoadingSpinner';

import Container from './styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getToken() {
      setIsLoading(true);
      const { data } = await api
        .post('/auth', {
          username: 'test',
          password: 'test',
        })
        .then(setIsLoading(false));
      sessionStorage.removeItem('Authorization');
      sessionStorage.setItem('Authorization', data.access_token);
    }
    getToken();
  }, []);
  return (
    <Container className={isLoading ? 'disabled' : ''}>
      <div className={isLoading ? 'disabled' : ''}>
        <Link to={!isLoading && '/dashboard'}>Ver todos os lugares</Link>
        <Link to={!isLoading && '/register'}>Cadastrar novo lugar</Link>
      </div>

      {isLoading && <LoadingSpinner />}
    </Container>
  );
}
