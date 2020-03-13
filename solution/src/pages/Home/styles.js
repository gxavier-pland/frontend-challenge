import styled from 'styled-components';

import blockIcon from '../../assets/icons/block-icon.svg';

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 240px);
  justify-content: flex-start;
  align-items: center;

  &.disabled {
    justify-content: space-around;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 250px;
    height: 70px;
    padding: 10px;
    text-decoration: none;
    color: #212845;
    border: 1px solid #212845;
    border-radius: 4px;
  }

  .disabled a {
    color: #a9a9a9;
    border: 1px solid #a9a9a9;
    background-image: url(${blockIcon});
    background-repeat: no-repeat;
    background-position: 220px 40px;
  }
`;
