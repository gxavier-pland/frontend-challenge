import styled from 'styled-components';

export default styled.img`
  width: 50px;
  height: 50px;
  animation-name: rotateLoading;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @keyframes rotateLoading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
