import { useContext, useState } from "react";

import { Container } from "./style";

import { ContextExpenses } from "../../contexts/ContextExpenses";

function Input({ label, placeholder, type, text, icon: Icon, ...rest }) {
  const [hidden, setHidden] = useState(true);

  const {
    valueType,
    description,
    value,
    setValueType,
    setDescription,
    setValue,
  } = useContext(ContextExpenses);

  const selectType = (e) => {
    setValueType(e.target.type);
    setHidden(true);
  };

  return (
    <Container select={hidden}>
      {type === "text" && (
        <>
          <p>{label}</p>
          <input
            {...rest}
            type="text"
            placeholder={placeholder}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </>
      )}
      {type === "number" && (
        <>
          <p>{label}</p>
          <div>
            <input
              {...rest}
              type="number"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <span>{text}</span>
          </div>
        </>
      )}
      {type === "select" && (
        <>
          <p>{label}</p>
          <div className="select" onClick={() => setHidden(!hidden)}>
            <input type="text" value={valueType} disabled />
            <Icon />
          </div>
          <ul>
            <li type="Entrada" onClick={selectType}>
              Entrada
            </li>
            <li type="Despesa" onClick={selectType}>
              Despesa
            </li>
          </ul>
        </>
      )}
    </Container>
  );
}

export default Input;
