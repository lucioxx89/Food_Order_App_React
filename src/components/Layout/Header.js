import React from "react";
import mealsImage from "../../assets/meals (1).jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "../Layout/Header.Module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="mealsImage" />
      </div>
    </React.Fragment>
  );
};

export default Header;
