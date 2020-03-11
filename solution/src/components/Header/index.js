import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.jpg';
import mobileMenu from '../../assets/icons/mobile_menu.svg';

import { HeaderContainer, Nav } from './styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo da empresa PlanD" />
      </Link>

      <Nav isOpen={isOpen}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <img src={mobileMenu} alt="icone de menu hamburguer" />
        </button>
      </Nav>
    </HeaderContainer>
  );
}
