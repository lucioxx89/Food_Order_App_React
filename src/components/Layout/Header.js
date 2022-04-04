import React from "react";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div> {mealsImage} </div>
    </React.Fragment>
  );
};

export default Header;
