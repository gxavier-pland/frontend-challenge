import React from 'react';

import logo from '../../assets/logo.jpg';

import HeaderContainer from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo da empresa PlanD" />
    </HeaderContainer>
  );
}
