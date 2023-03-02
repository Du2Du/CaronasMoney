import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  header {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 20px;
    background-color: #055160;
    color: #fafafa;
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
      0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
      0 32px 16px rgba(0, 0, 0, 0.09);
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
  }

  main .cards {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  main .cards .card {
    width: 29%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
    gap: 10px;
    cursor: pointer;
    font-weight: 700;
    background: #fafafa;
    border-radius: 7px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
      0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1),
      0 16px 16px rgba(0, 0, 0, 0.05);
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }

  .error {
    color: #dc3545;
  }

  .success {
    color: #198754;
  }

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
