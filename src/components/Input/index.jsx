import { useState } from "react";
import { Container } from "./style";

function Input({ label, placeholder, type, text, icon: Icon, ...rest }) {
  const [hidden, setHidden] = useState(true);
  const [valueType, setValueType] = useState("Entrada");

  const selectType = (e) => {
    setValueType(e.target.type);
    setHidden(true);
  };

  return (
    <Container select={hidden}>
      {type === "text" && (
        <>
          <p>{label}</p>
          <input {...rest} type="text" placeholder={placeholder} />
        </>
      )}
      {type === "number" && (
        <>
          <p>{label}</p>
          <div>
            <input {...rest} type="number" placeholder={placeholder} />
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
