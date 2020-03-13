import styled from 'styled-components';

export default styled.form`
  min-height: calc(100% - 240px);
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin: 10px;

    input {
      border: 0;
      border-bottom: 1px solid #ccc;
      margin-left: 10px;
    }
  }

  button {
    background-color: #212845;
    border: 0;
    color: #fff;
    padding: 20px 30px;
    margin: 10px;
    border-radius: 4px;

    &:hover,
    &:focus {
      background-color: #394161;
    }
  }
`;
