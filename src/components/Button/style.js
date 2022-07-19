import styled from "styled-components";

export const ButtonTheme = styled.button`
  color: ${(prop) => (prop.color === "primary" ? "#FFFFFF" : "#343A40")};
  background: ${(prop) => (prop.color === "primary" ? "#FD377E" : "#E9ECEF")};

  border: none;
  border-radius: 8px;

  width: 100%;
  padding: 10px 0;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  transition: background 0.4s;

  &:hover {
    color: var(--grey-0);
    background: ${(prop) => (prop.color === "primary" ? "#E34981" : "#343A40")};
  }
`;
