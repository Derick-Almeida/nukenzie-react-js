import { ButtonTheme } from "./style";

function Button({ color, children, ...rest }) {
  return (
    <ButtonTheme color={color} {...rest}>
      {children}
    </ButtonTheme>
  );
}

export default Button;
