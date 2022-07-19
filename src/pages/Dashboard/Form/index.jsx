import { Container } from "./style";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { MdKeyboardArrowDown } from "react-icons/md";

function Form() {
  return (
    <Container>
      <form>
        <div className="description--box">
          <Input
            type="text"
            label="Descrição"
            placeholder="Digite aqui sua descrição"
          />
          <span>Ex: Compra de roupas</span>
        </div>

        <div className="details">
          <Input type="number" label="Valor" placeholder="1" text="R$" />
          <Input
            type="select"
            label="Tipo de valor"
            icon={MdKeyboardArrowDown}
          />
        </div>

        <Button color="primary">Inserir valor</Button>
      </form>
    </Container>
  );
}

export default Form;
