import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import loadingIcon from '../../assets/icons/loading-vector.svg';

import Container from './styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getToken() {
      setIsLoading(true);
      /* const { data } = await api.get('/auth');
      sessionStorage.setItem('token', data); */
      setIsLoading(false);
    }
    getToken();
  }, []);
  return (
    <Container className={isLoading ? 'disabled' : ''}>
      <div className={isLoading ? 'disabled' : ''}>
        <Link to={!isLoading && '/dashboard'}>Ver todos os lugares</Link>
        <Link to={!isLoading && '/register'}>Cadastrar novo lugar</Link>
      </div>

      {isLoading && <img src={loadingIcon} alt="icone de carregamento" />}
    </Container>
  );
}
