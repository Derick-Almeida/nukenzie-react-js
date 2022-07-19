import Button from "../../../components/Button";
import Logo from "../../../components/Logo";
import { HeaderTheme } from "./style";

function Header({ setHomepage }) {
  return (
    <HeaderTheme>
      <div>
        <Logo color="primary" />
        <Button onClick={() => setHomepage(true)}>Inicio</Button>
      </div>
    </HeaderTheme>
  );
}

export default Header;
