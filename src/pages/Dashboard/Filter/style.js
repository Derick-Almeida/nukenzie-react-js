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

  @media (min-width: 2560px) {
  }

  @media (max-width: 1024px) {
    > p {
      font-size: 0.9rem;
    }

    .buttons {
      gap: 6px;

      button {
        padding: 6px 11px;
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 425px) {
  }

  @media (max-width: 375px) {
  }

  @media (max-width: 320px) {
  }
`;
