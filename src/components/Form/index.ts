import styled from "styled-components";

export const FormStyled = styled.form`
  input:not([type="radio"]),
  button {
    display: block;
    width: 100%;
    padding: 12px 8px;
    border-radius: 12px;
    border: 1px solid #2a3759;
    margin: 12px 0;
    outline-color: #2a3759;
  }

  button {
    background-color: transparent;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #2a3759;
    color: white;
  }
`;
