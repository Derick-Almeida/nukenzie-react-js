import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export const ContextExpenses = createContext({});

export const ProviderExpenses = ({ children }) => {
  const initialValue = JSON.parse(localStorage.getItem("@NuKenzie:expenses"));

  const [financialExpenses, setFinancialExpenses] = useState(
    initialValue || []
  );
  const [expensesFiltred, setExpensesFiltred] = useState(financialExpenses);

  const [valueType, setValueType] = useState("Entrada");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const removeExpense = (id) => {
    setFinancialExpenses(
      financialExpenses.filter((expense) => expense.id !== id)
    );

    localStorage.setItem(
      "@NuKenzie:expenses",
      JSON.stringify(financialExpenses.filter((expense) => expense.id !== id))
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

      localStorage.setItem(
        "@NuKenzie:expenses",
        JSON.stringify([
          ...financialExpenses,
          {
            id: uuidv4(),
            description,
            value: valueType === "Entrada" ? value : -value,
            type: valueType,
          },
        ])
      );

      setDescription("");
      setValueType("Entrada");
      setValue("");
    } else {
      toast.error("Preencha o formulário!");
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
