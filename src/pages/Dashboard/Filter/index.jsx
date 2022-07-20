import { useContext, useEffect, useState } from "react";

import { Container } from "./style";

import Button from "../../../components/Button";

import { ContextExpenses } from "../../../contexts/ContextExpenses";

function Filter() {
  const [type, setType] = useState("Todo");

  const { financialExpenses, setExpensesFiltred } = useContext(ContextExpenses);

  useEffect(() => {
    if (type === "Todo") {
      setExpensesFiltred(financialExpenses);
    } else {
      setExpensesFiltred(
        financialExpenses.filter((expense) => expense.type === type)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, financialExpenses]);

  return (
    <Container>
      <p>Resumo financeiro</p>
      <div className="buttons">
        <Button
          color={type === "Todo" ? "primary" : "default"}
          value="Todo"
          onClick={(e) => setType(e.target.value)}
        >
          Todos
        </Button>
        <Button
          color={type === "Entrada" ? "primary" : "default"}
          value="Entrada"
          onClick={(e) => setType(e.target.value)}
        >
          Entradas
        </Button>
        <Button
          color={type === "Despesa" ? "primary" : "default"}
          value="Despesa"
          onClick={(e) => setType(e.target.value)}
        >
          Despesas
        </Button>
      </div>
    </Container>
  );
}

export default Filter;
