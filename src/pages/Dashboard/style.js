import styled from "styled-components";

export const Container = styled.main`
  max-width: 70%;
  min-height: 80vh;
  margin: 0 auto;

  display: flex;
  gap: 5%;

  padding-top: 58px;

  .form {
    width: 35%;
    max-width: 35%;

    .total--money {
      border: 1px solid var(--grey-1);
      border-radius: 4px;
      padding: 19px 24px;
      margin-top: 20px;

      > h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--grey-4);
        margin-bottom: 10px;
        font-size: 1.5rem;
        font-weight: 700;

        > span {
          color: var(--pink-1);
          font-size: 1.2rem;
        }
      }
      > span {
        color: var(--grey-3);
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }

  .list {
    width: 60%;
    max-width: 60%;

    display: flex;
    flex-direction: column;
    gap: 27px;
  }

  @media (min-width: 2560px) {
    .form {
      .total--money {
        > h2 {
          > span {
          }
        }
        > span {
        }
      }
    }
  }

  @media (max-width: 1024px) {
    max-width: 80%;

    .form {
      .total--money {
        padding: 15px 20px;

        > h2 {
          font-size: 1.3rem;
          > span {
            font-size: 1rem;
          }
        }
        > span {
          font-size: 0.8rem;
        }
      }
    }

    .list {
      gap: 23px;
    }
  }

  @media (max-width: 768px) {
    .form {
      .total--money {
        > h2 {
          > span {
          }
        }
        > span {
        }
      }
    }
  }

  @media (max-width: 425px) {
    .form {
      .total--money {
        > h2 {
          > span {
          }
        }
        > span {
        }
      }
    }
  }

  @media (max-width: 375px) {
    .form {
      .total--money {
        > h2 {
          > span {
          }
        }
        > span {
        }
      }
    }
  }

  @media (max-width: 320px) {
    .form {
      .total--money {
        > h2 {
          > span {
          }
        }
        > span {
        }
      }
    }
  }
`;
