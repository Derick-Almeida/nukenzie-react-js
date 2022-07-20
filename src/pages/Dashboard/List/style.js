import styled from "styled-components";

export const Container = styled.div`
  h2 {
    font-weight: 700;
    color: var(--grey-3);
    font-size: 1.4rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 26px;

    img {
      width: 100%;
      object-fit: contain;
      user-select: none;
    }
  }

  @media (min-width: 2560px) {
  }

  @media (max-width: 1024px) {
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
