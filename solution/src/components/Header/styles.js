import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 5px 0px #ccc;
  padding: 0 20px;

  a,
  img {
    width: 80px;
    height: 80px;
  }
`;

export const Nav = styled.nav`
  height: 80px;

  button {
    border: 0;
    background-color: transparent;
    height: 80px;
  }
`;
