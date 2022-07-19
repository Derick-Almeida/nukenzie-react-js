import { useState } from "react";
import Homepage from "./pages/Home";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  const [homepage, setHomepage] = useState(true);

  return (
    <>
      <GlobalStyle />
      {homepage ? <Homepage setHomepage={setHomepage} /> : <></>}
    </>
  );
}

export default App;
