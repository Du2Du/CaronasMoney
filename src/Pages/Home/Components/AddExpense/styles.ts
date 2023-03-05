import styled from "styled-components";

export const AddExpenseContainer = styled.div`
  width:100% ;
  display: flex;
  flex-direction: column;
  align-items: center;
  .fields{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex-direction: row;
  }
  .fields .field{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .fields .field label{
    font-size: 30px;
  }

  .fields .field input{
    padding: 10px;
    border-radius: 16px;
    border: 1px solid #a9a9a9;
    background-color: #e9e7e7;
    color: #000;
  }
`