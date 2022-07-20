import styled from "styled-components";

export const TitleTheme = styled.h1`
  color: var(--pink-1);
  font-weight: 800;
  font-size: 1.5rem;

  white-space: nowrap;

  > span {
    color: ${(prop) => (prop.color === "primary" ? "#212529" : "#FFFFFF")};
  }

  @media (min-width: 2560px) {
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
  }

  @media (max-width: 425px) {
  }

  @media (max-width: 375px) {
  }

  @media (max-width: 320px) {
  }
`;
