import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from './styles';

import LoadingSpinner from '../../components/LoadingSpinner';

export default function PlaceDetail({ match }) {
  const [isLoading, setIsLoading] = useState(false);
  const [placeData, setPlaceData] = useState();

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

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>Nome: {placeData && placeData.name}</p>
          <p>Cidade: {placeData && placeData.city}</p>
          <p>Estad: {placeData && placeData.state}</p>
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
