import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Food } from "./Components/Food";
import { createContext, useState } from "react";
import { Fooder } from "./Components/Fooder";

export const countContext = createContext();
// https://adorable-bat-fatigues.cyclic.app/ => api
function App() {
  const [noOfItem, setNoOfItem] = useState(0);
  return (
    <>
      <BrowserRouter>
        <countContext.Provider value={[noOfItem, setNoOfItem]}>
          <Header></Header>

          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/food"} element={<Food />} />
          </Routes>
        </countContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
