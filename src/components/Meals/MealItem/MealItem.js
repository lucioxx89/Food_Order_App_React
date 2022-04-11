import React from "react";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div>
      <li>
        <div>
          <h3>{props.name}</h3>
          <div> {props.description}</div>
          <div>{price}</div>
        </div>
      </li>
    </div>
  );
};

export default MealItem;
