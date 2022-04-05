import React from "react";

import classes from "../Meals/AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  // option 1 : map save in a variable and pass it to the jsx to have leaner code
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  return (
    // <section>               option 2, the map is in jsx but more confusing, lots of code
    //   <ul>
    //     {DUMMY_MEALS.map((meal) => (
    //       <li>{meal.name}</li>
    //     ))}
    //   </ul>
    // </section>

    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
