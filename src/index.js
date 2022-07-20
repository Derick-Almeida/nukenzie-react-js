import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderExpenses } from "./contexts/ContextExpenses";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderExpenses>
      <App />
    </ProviderExpenses>
  </React.StrictMode>
);
