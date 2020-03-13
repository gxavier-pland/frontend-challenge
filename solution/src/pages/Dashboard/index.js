import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from './styles';

import LoadingSpinner from '../../components/LoadingSpinner';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function getToken() {
      setIsLoading(true);
      const { data } = await api
        .get('/api/v1.0/places')
        .then(setIsLoading(false));
      setPlaces(data.places);
    }
    getToken();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="wrapper">
          {places.length > 0 &&
            places.map(place => (
              <Link to="/details/:place" className="card" key={place.id}>
                <p>{place.name}</p>
                <p>{place.city}</p>
                <p>{place.state}</p>
              </Link>
            ))}
        </div>
      )}
    </Container>
  );
}
