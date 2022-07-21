import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;

  background: var(--grey-4);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  max-width: 80%;
  max-height: 75vh;

  color: var(--white);

  .container--intro {
    max-width: 25%;

    > div {
      display: flex;
      flex-direction: column;
      gap: 28px;

      > p {
        font-weight: 800;
        font-size: 2rem;
      }

      > span {
        font-weight: 400;
        font-size: 0.9rem;
      }

      > button {
        width: 80%;
      }
    }
  }

  .container--logo {
    height: 100%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      user-select: none;
    }
  }

  @media (max-width: 1024px) {
    .container--intro {
      max-width: 35%;
    }
  }

  @media (max-width: 768px) {
    .container--intro {
      max-width: 40%;

      > div {
        > p {
          font-size: 1.8rem;
        }

        > span {
          font-size: 0.8rem;
        }
      }
    }
  }

  @media (max-width: 650px) {
    .container--intro {
      max-width: 70%;

      > div {
        > p {
          font-size: 2rem;
        }

        > span {
          font-size: 0.9rem;
        }
      }
    }
    .container--logo {
      display: none;
    }
  }

  @media (max-width: 425px) {
    .container--intro {
      max-width: 80%;
    }
  }

  @media (max-width: 375px) {
    .container--intro {
      max-width: 90%;
    }
  }

  @media (max-width: 320px) {
    .container--intro {
      div {
        text-align: center;
        > button {
          width: 100%;
        }
      }
    }
  }
`;
