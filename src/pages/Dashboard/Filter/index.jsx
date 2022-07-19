import { useState } from "react";
import Button from "../../../components/Button";
import { Container } from "./style";

function Filter() {
  const [type, setType] = useState("Todos");

  return (
    <Container>
      <p>Resumo financeiro</p>
      <div className="buttons">
        <Button
          color={type === "Todos" ? "primary" : "default"}
          value="Todos"
          onClick={(e) => setType(e.target.value)}
        >
          Todos
        </Button>
        <Button
          color={type === "Entradas" ? "primary" : "default"}
          value="Entradas"
          onClick={(e) => setType(e.target.value)}
        >
          Entradas
        </Button>
        <Button
          color={type === "Despesas" ? "primary" : "default"}
          value="Despesas"
          onClick={(e) => setType(e.target.value)}
        >
          Despesas
        </Button>
      </div>
    </Container>
  );
}

export default Filter;
