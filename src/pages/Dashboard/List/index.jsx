import { useContext } from "react";

import { Container } from "./style";

import NoCards from "../../../assets/no_card.svg";
import Card from "../../../components/Card";

import { ContextExpenses } from "../../../contexts/ContextExpenses";

function List() {
  const { financialExpenses } = useContext(ContextExpenses);
  return (
    <>
      <Container>
        <h2>Você ainda não possui nenhum lançamento</h2>
        <ul>
          {financialExpenses.length > 0 ? (
            financialExpenses.map((expenses, index) => (
              <Card key={index} expenses={expenses}></Card>
            ))
          ) : (
            <img src={NoCards} alt="Sem cards no momento" />
          )}
        </ul>
      </Container>
    </>
  );
}

export default List;
