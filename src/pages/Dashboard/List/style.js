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

  @media (max-width: 1024px) {
    ul {
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
