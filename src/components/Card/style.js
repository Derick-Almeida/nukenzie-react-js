import styled from "styled-components";

export const ListItem = styled.li`
  background: var(--grey-0);

  border-left: 4px solid
    ${(prop) => (prop.type === "Entrada" ? "#03B898" : "#E9ECEF")};
  border-radius: 4px;

  padding: 14px 18px;

  &:hover {
    box-shadow: 0 4px 42px -12px var(--shadow);
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

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
      gap: 50px;
      width: 35%;
      max-width: 35%;

      > span {
        white-space: nowrap;
        font-weight: 400;
        font-size: 1rem;
        color: var(--grey-4);
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
  }
`;
