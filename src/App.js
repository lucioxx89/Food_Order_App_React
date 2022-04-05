import Header from "../src/components/Layout/Header";

import React from "react";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
