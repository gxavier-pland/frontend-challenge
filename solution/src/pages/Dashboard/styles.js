import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 240px);
  justify-content: center;
  align-items: center;

  .wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: calc(50% - 20px);
      height: 150px;
      margin: 10px;
      border: 1px solid #212845;
      color: inherit;
      text-decoration: none;
      padding: 10px;
      border-radius: 4px;
      text-align: center;
    }
    .card:last-of-type) {
      margin-right: auto;
    }
  }
`;
