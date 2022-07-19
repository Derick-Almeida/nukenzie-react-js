import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > p {
    font-size: 1rem;
    white-space: nowrap;
    color: var(--grey-4);
    font-weight: 700;
  }

  .buttons {
    display: flex;
    gap: 10px;

    button {
      padding: 10px 15px;
      font-size: 1rem;
      font-family: "Nunito";
      font-weight: 600;
    }
  }
`;
