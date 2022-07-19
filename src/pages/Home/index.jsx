import { Container, Content } from "./style";

import HomepageImage from "../../assets/image_homepage.svg";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

function Homepage({ setHomepage }) {
  return (
    <Container>
      <Content>
        <div className="container--intro">
          <div>
            <Logo />
            <p>Centralize o controle das suas finanças</p>
            <span>de forma rápida e segura</span>
            <Button color="primary" onClick={() => setHomepage(false)}>
              Iniciar
            </Button>
          </div>
        </div>

        <div className="container--logo">
          <img src={HomepageImage} alt="Logo da Homepage" />
        </div>
      </Content>
    </Container>
  );
}

export default Homepage;
