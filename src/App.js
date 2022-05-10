import Header from "../src/components/Layout/Header";

import Cart from "./components/Cart/Cart";

import React from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
