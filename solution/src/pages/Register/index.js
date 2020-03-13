import React, { useState } from 'react';
import api from '../../services/api';
import Container from './styles';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState(false);
  const [formValue, setFormValue] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const { name, city, state } = formValue;
    await api
      .post('/api/v1.0/places/new', {
        name,
        slug: name.replace(/ /g, '_').toLowerCase(),
        city,
        state,
      })
      .then(setIsLoading(false))
      .then(setUserMessage('Lugar Cadastrado'))
      .catch(setUserMessage('Ops, ocorreu um erro'));
  }

  return (
    <Container onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nome:
        <input
          name="name"
          value={formValue.name}
          onChange={e => setFormValue({ ...formValue, name: e.target.value })}
          required
        />
      </label>
      <label htmlFor="city">
        Cidade:
        <input
          name="city"
          value={formValue.city}
          onChange={e => setFormValue({ ...formValue, city: e.target.value })}
          required
        />
      </label>
      <label htmlFor="state">
        Estado:
        <input
          name="state"
          value={formValue.state}
          onChange={e => setFormValue({ ...formValue, state: e.target.value })}
          required
        />
      </label>
      <button type="submit">{isLoading ? 'Carregando' : 'Enviar'}</button>
      <span>{userMessage && userMessage}</span>
    </Container>
  );
}
