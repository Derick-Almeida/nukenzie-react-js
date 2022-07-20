import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContextExpenses = createContext({});

export const ProviderExpenses = ({ children }) => {
  const [financialExpenses, setFinancialExpenses] = useState([]);
  const [expensesFiltred, setExpensesFiltred] = useState(financialExpenses);

  const [valueType, setValueType] = useState("Entrada");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const removeExpense = (id) => {
    setFinancialExpenses(
      financialExpenses.filter((expense) => expense.id !== id)
    );
  };

  const addExpense = (e) => {
    e.preventDefault();

    if (description !== "" && value !== "") {
      setFinancialExpenses([
        ...financialExpenses,
        {
          id: uuidv4(),
          description,
          value: valueType === "Entrada" ? value : -value,
          type: valueType,
        },
      ]);
    }
  };

  return (
    <ContextExpenses.Provider
      value={{
        financialExpenses,
        setFinancialExpenses,
        removeExpense,
        addExpense,
        expensesFiltred,
        setExpensesFiltred,
        valueType,
        description,
        value,
        setValueType,
        setDescription,
        setValue,
      }}
    >
      {children}
    </ContextExpenses.Provider>
  );
};
