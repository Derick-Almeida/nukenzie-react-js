import styled, { keyframes } from "styled-components";

const SelectAnimation = keyframes`
    0%{
        transform: translateY(-40px);
        opacity: 0;
    }
    100%{
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
  position: relative;

  > p {
    color: var(--grey-4);
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }

  input {
    background: var(--grey-0);
    color: var(--grey-2);

    border: 2px solid var(--grey-0);
    outline: none;

    border-radius: 8px;
    padding: 16px 19px;

    width: 100%;

    font-family: "Inter";
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--grey-2);
    }

    &:focus {
      background: var(--white);
      color: var(--grey-4);
      border: 2px solid var(--grey-4);
    }
  }

  > div {
    display: flex;
    align-items: center;

    > input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    > input[type="number"] {
      padding-right: 57px;
    }

    > span {
      color: var(--grey-3);
      position: absolute;
      right: 19px;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
    }

    > svg {
      position: absolute;
      right: 19px;

      color: var(--grey-2);
      font-weight: 900;
      font-size: 1.5rem;
    }
  }

  .select {
    cursor: pointer;
    user-select: none;

    border-radius: 8px;
    border: ${(prop) =>
      prop.select ? "2px solid #F8F9FA" : "2px solid #212529"};
  }

  > ul {
    position: absolute;
    width: 100%;
    display: ${(prop) => (prop.select ? "none" : "block")};

    box-shadow: 1px 1px 5px var(--shadow);
    border-radius: 8px;
    margin-top: 5px;

    animation: ${SelectAnimation} 0.3s linear;
    transition: 0.3s;

    > li:nth-child(1) {
      background: var(--grey-1);
      color: var(--grey-4);
      border-radius: 8px 8px 0 0;
    }
    > li:nth-child(2) {
      background: var(--grey-0);
      color: var(--grey-3);
      border-radius: 0 0 8px 8px;
    }

    > li {
      width: 100%;
      padding: 10px;

      cursor: pointer;
      user-select: none;

      &:hover {
        background: var(--grey-2);
        color: var(--grey-0);
      }
    }
  }
`;
