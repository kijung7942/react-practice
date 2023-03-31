import React, { Fragment, useContext } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import Card from "../UI/Card/Card";
import DummyMeal from "../../store/dummy-meals";

const AvailableMeals = () => {
  const mealCtx = useContext(DummyMeal);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealCtx.meals.map((meal) => {
            return <MealItem key={meal.id} value={meal}></MealItem>;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
