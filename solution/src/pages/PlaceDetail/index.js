import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import Container from './styles';
import LoadingSpinner from '../../components/LoadingSpinner';

import pencilIcon from '../../assets/icons/pencil-icon.svg';

export default function PlaceDetail({ match }) {
  const [isLoading, setIsLoading] = useState(false);
  const [userMessage, setUserMessage] = useState(false);
  const [placeData, setPlaceData] = useState([]);
  const [formValue, setFormValue] = useState({});

  const { place } = match.params;

  useEffect(() => {
    async function getPlace() {
      setIsLoading(true);
      const { data } = await api
        .get(`/api/v1.0/places/${place}`)
        .then(setIsLoading(false));

      setPlaceData(data.place);
    }
    getPlace();
  }, [place]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    await api
      .put('/api/v1.0/places/edit', {
        id: placeData.id,
        fields: {
          name: {
            current_value: placeData.name,
            new_value: formValue.name || placeData.name,
          },
          city: {
            current_value: placeData.city,
            new_value: formValue.city || placeData.city,
          },
          state: {
            current_value: placeData.state,
            new_value: formValue.state || placeData.state,
          },
        },
      })
      .then(setIsLoading(false), setUserMessage('Lugar Atualizado'));
  }

  return (
    <Container onSubmit={handleSubmit}>
      {isLoading && placeData.length > 0 ? (
        <LoadingSpinner />
      ) : (
        <>
          <label htmlFor="name">
            Nome:
            <input
              name="name"
              placeholder={placeData.name}
              value={formValue.name}
              onChange={e =>
                setFormValue({ ...formValue, name: e.target.value })
              }
            />
          </label>
          <label htmlFor="city">
            Cidade:
            <input
              name="city"
              placeholder={placeData.city}
              value={formValue.city}
              onChange={e =>
                setFormValue({ ...formValue, city: e.target.value })
              }
            />
          </label>
          <label htmlFor="state">
            Estado:
            <input
              name="state"
              placeholder={placeData.state}
              value={formValue.state}
              onChange={e =>
                setFormValue({ ...formValue, state: e.target.value })
              }
            />
          </label>

          <button type="submit">
            Editar Item
            <img src={pencilIcon} alt="ícone de um lapis" />
          </button>
          <span>{userMessage && userMessage}</span>
        </>
      )}
    </Container>
  );
}

PlaceDetail.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

PlaceDetail.defaultProps = {
  match: PropTypes.object,
};
