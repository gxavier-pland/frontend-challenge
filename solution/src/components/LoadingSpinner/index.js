import React from 'react';
import loadingIcon from '../../assets/icons/loading-vector.svg';
import LoadingIcon from './styles';

export default function LoadingSpinner() {
  return <LoadingIcon src={loadingIcon} alt="icone de carregamento" />;
}
