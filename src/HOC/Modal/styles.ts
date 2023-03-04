import styled from "styled-components";

export const ModalContainer = styled.div`
  background: #fff;
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  left: 25%;
  top: 10%;
  position: absolute;
  height: 80%;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    2px 8px 4px rgba(0, 0, 0, 0.09), 2px 16px 8px rgba(0, 0, 0, 0.09),
    2px 32px 16px rgba(0, 0, 0, 0.09);

  header {
    border-radius: 6px 6px 0 0;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    background-color: #055160;
    box-shadow: none;
    width: 100%;
  }

  header .closeButton {
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header .closeButton:hover {
    background-color: #fff;
    color: #055160;
  }

  section {
    padding: 0 10px;
  }

  footer {
    width: 100%;
    border-radius: 0 0 6px 6px;
    padding: 10px;
    border-top: 1px solid #a9a9a9;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
  }

  footer button {
    cursor: pointer;
    border: 1px solid #a9a9a9;
    border-radius: 4px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    color: #055160;
  }

  footer .buttonSuccess{
    background-color: #055160;
    color: #fff;
  }
`;
