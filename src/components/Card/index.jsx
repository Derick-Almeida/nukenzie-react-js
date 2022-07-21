import { useContext } from "react";

import { ListItem } from "./style";

import Button from "../Button";

import { FaTrash } from "react-icons/fa";

import { ContextExpenses } from "../../contexts/ContextExpenses";

function Card({ expense }) {
  const { id, description, type, value } = expense;

  const { removeExpense } = useContext(ContextExpenses);

  const fromateValue = Number(Number(value).toPrecision(4)).toFixed(2);

  return (
    <ListItem type={type}>
      <div>
        <p>{description}</p>

        <div>
          <span>
            R$
            {fromateValue}
          </span>
          <Button onClick={() => removeExpense(id)}>
            <FaTrash />
          </Button>
        </div>
      </div>

      <span>{type}</span>
    </ListItem>
  );
}

export default Card;
