import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from './styles';
import LoadingSpinner from '../../components/LoadingSpinner';

import searchIcon from '../../assets/icons/search-icon.svg';

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState(false);
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

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await api
      .get(`/api/v1.0/places/search/${formValue.search}`)
      .then(setIsLoading(false));
    setPlaces(data.places);
  }

  return (
    <Container>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              value={formValue.search}
              onChange={e =>
                setFormValue({ ...formValue, search: e.target.value })
              }
              required
            />
            <button type="submit">
              <img src={searchIcon} alt="ícone de uma lupa" />
            </button>
          </form>

          <div className="wrapper">
            {places.length > 0 &&
              places.map(place => (
                <Link
                  to={`/place-detail/${place.slug}`}
                  className="card"
                  key={place.id}
                >
                  <p>{place.name}</p>
                  <p>{place.city}</p>
                  <p>{place.state}</p>
                </Link>
              ))}
          </div>
        </>
      )}
    </Container>
  );
}
