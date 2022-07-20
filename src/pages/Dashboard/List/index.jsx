import { useContext } from "react";

import { Container } from "./style";

import NoCards from "../../../assets/no_card.svg";

import Card from "../../../components/Card";

import { ContextExpenses } from "../../../contexts/ContextExpenses";

function List() {
  const { expensesFiltred } = useContext(ContextExpenses);
  return (
    <>
      <Container>
        <ul>
          {expensesFiltred.length > 0 ? (
            expensesFiltred.map((expense, index) => (
              <Card key={index} expense={expense}></Card>
            ))
          ) : (
            <>
              <h2>Você ainda não possui nenhum lançamento</h2>
              <img src={NoCards} alt="Sem cards no momento" />
            </>
          )}
        </ul>
      </Container>
    </>
  );
}

export default List;
