import { ListItem } from "./style";

import Button from "../Button";

import { FaTrash } from "react-icons/fa";

function Card({ expenses }) {
  const { description, type, value } = expenses;

  return (
    <ListItem type={type}>
      <div>
        <p>{description}</p>

        <div>
          <span>R$ {Number(value).toFixed(2)}</span>
          <Button>
            <FaTrash />
          </Button>
        </div>
      </div>

      <span>{type}</span>
    </ListItem>
  );
}

export default Card;
