import { useContext } from "react";

import { Container } from "./style";

import Button from "../../../components/Button";
import Input from "../../../components/Input";

import { MdKeyboardArrowDown } from "react-icons/md";

import { ContextExpenses } from "../../../contexts/ContextExpenses";

function Form() {
  const { addExpense } = useContext(ContextExpenses);

  return (
    <Container>
      <form onSubmit={addExpense}>
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

        <Button type="submit" color="primary">
          Inserir valor
        </Button>
      </form>
    </Container>
  );
}

export default Form;
