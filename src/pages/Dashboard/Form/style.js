import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid var(--grey-1);
  border-radius: 4px;
  padding: 38px 24px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .description--box {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > span {
        color: var(--grey-2);
        font-family: "Inter";
        font-weight: 400;
        font-size: 0.9rem;
      }
    }

    .details {
      display: flex;
      justify-content: space-between;

      > div {
        max-width: 49%;
      }
    }

    button {
      padding: 14px 0;
    }
  }
`;
