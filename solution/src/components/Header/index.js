import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import HeaderContainer from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo da empresa PlanD" />
      </Link>
    </HeaderContainer>
  );
}
