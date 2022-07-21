import { useContext, useRef, useState } from "react";

import { Container, Navegation } from "./style";

import Header from "./Header";
import Filter from "./Filter";
import List from "./List";
import Form from "./Form";

import { ContextExpenses } from "../../contexts/ContextExpenses";
import Button from "../../components/Button";

function Dashboard({ setHomepage }) {
  const { financialExpenses } = useContext(ContextExpenses);
  const [currentPart, setCurrentPart] = useState("formulario");

  const totalValue = financialExpenses.reduce((acc, expense) => {
    return acc + Number(expense.value);
  }, 0);

  const main = useRef();

  const moveToRight = () => {
    const width = main.current.offsetWidth;

    main.current.scrollLeft += width + 50;
    setCurrentPart("resumo");
  };

  const moveToLeft = () => {
    const width = main.current.offsetWidth;

    main.current.scrollLeft -= width + 50;
    setCurrentPart("formulario");
  };

  return (
    <>
      <Header setHomepage={setHomepage} />
      <Container ref={main}>
        <div className="form">
          <Form />

          {financialExpenses.length > 0 && (
            <div className="total--money">
              <h2>
                Valor total: <span>$ {totalValue.toPrecision(4)}</span>
              </h2>
              <span>O valor se refere ao saldo</span>
            </div>
          )}
        </div>

        <div className="list">
          <Filter />
          <List />
        </div>
      </Container>
      <Navegation>
        <Button
          color={currentPart === "formulario" && "primary"}
          onClick={moveToLeft}
        >
          Formulário
        </Button>
        <Button
          color={currentPart === "resumo" && "primary"}
          onClick={moveToRight}
        >
          Resumo
        </Button>
      </Navegation>
    </>
  );
}

export default Dashboard;
