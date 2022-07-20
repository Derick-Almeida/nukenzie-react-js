import { useState } from "react";

import GlobalStyle from "./style/GlobalStyle";

import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Home";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [homepage, setHomepage] = useState(true);

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        limit={3}
      />
      {homepage ? (
        <Homepage setHomepage={setHomepage} />
      ) : (
        <Dashboard setHomepage={setHomepage} />
      )}
    </>
  );
}

export default App;
