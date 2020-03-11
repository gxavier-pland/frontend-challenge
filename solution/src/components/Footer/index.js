import React from 'react';
import { Link } from 'react-router-dom';

import FooterContainer from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        Feito com carinho por <Link to="/">PlanD</Link>
      </p>
    </FooterContainer>
  );
}
