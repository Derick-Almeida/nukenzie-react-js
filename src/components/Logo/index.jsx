import { TitleTheme } from "./style";

function Logo({ color }) {
  return (
    <TitleTheme color={color}>
      Nu <span>Kenzie</span>
    </TitleTheme>
  );
}

export default Logo;
