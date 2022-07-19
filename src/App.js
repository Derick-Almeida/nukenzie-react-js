import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";

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
