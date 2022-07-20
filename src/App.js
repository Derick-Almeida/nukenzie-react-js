import { useState } from "react";

import GlobalStyle from "./style/GlobalStyle";

import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Home";

function App() {
  const [homepage, setHomepage] = useState(true);

  return (
    <>
      <GlobalStyle />
      {homepage ? (
        <Homepage setHomepage={setHomepage} />
      ) : (
        <Dashboard setHomepage={setHomepage} />
      )}
    </>
  );
}

export default App;
