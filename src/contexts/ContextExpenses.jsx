import { createContext, useState } from "react";

export const ContextExpenses = createContext({});

export const ProviderExpenses = ({ children }) => {
  const [financialExpenses, setFinancialExpenses] = useState([
    { description: "dsadadsasd", type: "Entrada", value: "12345" },
    { description: "dsadadsasd", type: "Despesa", value: "12340" },
  ]);

  return (
    <ContextExpenses.Provider
      value={{ financialExpenses, setFinancialExpenses }}
    >
      {children}
    </ContextExpenses.Provider>
  );
};
