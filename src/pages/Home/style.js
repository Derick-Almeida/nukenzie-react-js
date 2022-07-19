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
  justify-content: space-around;
  gap: 50px;

  width: 80%;
  height: 80vh;

  color: var(--white);

  .container--intro {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    > div {
      width: 51%;
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
    }
  }

  .container--logo {
    flex: 1;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
