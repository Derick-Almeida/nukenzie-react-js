import styled from "styled-components";

export const ListItem = styled.li`
  background: var(--grey-0);

  border-left: 4px solid
    ${(prop) => (prop.type === "Entrada" ? "#03B898" : "#E9ECEF")};
  border-radius: 4px;

  padding: 10px 14px;

  &:hover {
    box-shadow: 0 4px 42px -12px var(--shadow);
    transform: scale(1.02);
    transition: 0.4s;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    > p {
      font-weight: 700;
      color: var(--grey-4);
      font-size: 1.2rem;
      text-transform: capitalize;

      width: 60%;
      max-width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    > div {
      display: flex;
      justify-content: space-between;

      width: 35%;
      max-width: 35%;

      > span {
        white-space: nowrap;
        font-weight: 400;
        font-size: 1rem;
        color: var(--grey-4);

        max-width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      > button {
        height: 24px;
        width: 24px;
        padding: 0;
        padding-right: 1px;

        svg {
          font-size: 0.8rem;
        }
      }
    }
  }

  > span {
    color: var(--grey-3);
    font-weight: 400;
    font-size: 0.9rem;
  }

  @media (max-width: 1024px) {
    > div {
      margin-bottom: 4px;

      > p {
        font-size: 1.1rem;
      }

      > div {
        > span {
          font-size: 0.9rem;
        }

        > button {
          height: 20px;
          width: 20px;
          padding-right: 0;
          border-radius: 4px;

          svg {
            font-size: 0.7rem;
          }
        }
      }
    }

    > span {
      font-size: 0.7rem;
    }
  }
`;
