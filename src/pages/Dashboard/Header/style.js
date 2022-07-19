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

    width: 80%;
    margin: 0 auto;

    button {
      width: 6%;
      font-family: "Nunito", sans-serif;
      font-weight: 600;
    }
  }
`;
