import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ value, onClick }) => {
  return (
    <div className={classes.meal}>
      <div>
        <h3>{value.name}</h3>
        <p className={classes.description}>{value.description}</p>
        <p className={classes.price}>${value.price}</p>
      </div>
      <div>
        <MealItemForm value={value} onClick={onClick}></MealItemForm>
      </div>
    </div>
  );
};

export default MealItem;
