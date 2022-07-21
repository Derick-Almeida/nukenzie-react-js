import styled from "styled-components";

export const HeaderTheme = styled.header`
  box-shadow: 0 0 15px var(--shadow);
  min-height: 10vh;

  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 70%;
    margin: 0 auto;

    button {
      width: 6%;
      font-family: "Nunito", sans-serif;
      font-weight: 600;
    }
  }

  @media (max-width: 1024px) {
    > div {
      width: 80%;

      button {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
    > div {
      width: 85%;

      button {
        width: 8%;
      }
    }
  }

  @media (max-width: 425px) {
    > div button {
      width: 14%;
    }
  }

  @media (max-width: 375px) {
    > div button {
      width: 16%;
    }
  }
`;
