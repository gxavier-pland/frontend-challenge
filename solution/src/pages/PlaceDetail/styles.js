import styled from 'styled-components';

export default styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 240px);
  width: 85%;
  margin: auto;

  @media (min-width: 768px) {
    width: 320px;
  }

  label {
    font-size: 1.1em;
    margin: 10px;

    input {
      border: 0;
      border-bottom: 1px solid #212845;

      &::placeholder {
        color: inherit;
        font-size: 1.2em;
        padding: 5px;
      }
    }
  }

  button {
    background-color: #212845;
    border: 0;
    color: #fff;
    padding: 20px 30px;
    width: 200px;
    margin: 10px auto;
    border-radius: 4px;

    &:hover,
    &:focus {
      background-color: #394161;
    }

    img {
      width: 20px;
      margin-left: 15px;
    }
  }

  span {
    text-align: center;
  }
`;
