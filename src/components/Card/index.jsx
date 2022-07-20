import { useContext } from "react";

import { ListItem } from "./style";

import Button from "../Button";

import { FaTrash } from "react-icons/fa";

import { ContextExpenses } from "../../contexts/ContextExpenses";

function Card({ expense }) {
  const { id, description, type, value } = expense;

  const { removeExpense } = useContext(ContextExpenses);

  return (
    <ListItem type={type}>
      <div>
        <p>{description}</p>

        <div>
          <span>R$ {Number(value).toFixed(2)}</span>
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
