import styled from "styled-components";

export const WrapperPage = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    width: 400px;
    padding: 12px;

    h1,
    p {
      text-align: center;
    }
  }
`;
