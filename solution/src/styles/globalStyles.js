import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  *:focus {
    box-sizing: border-box;
  }

  html, body,#root{
    font-family: 'Nunito', sans-serif;
    height: 100%;
  }
`;
