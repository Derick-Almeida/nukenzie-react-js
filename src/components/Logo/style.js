import styled from "styled-components";

export const TitleTheme = styled.h1`
  color: var(--pink-1);
  font-weight: 800;
  font-size: 1.5rem;

  white-space: nowrap;

  > span {
    color: ${(prop) => (prop.color === "primary" ? "#212529" : "#FFFFFF")};
  }
`;
