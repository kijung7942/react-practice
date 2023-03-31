import React, { useContext, useRef } from "react";
import Input from "../UI/Input/Input";

import classes from "./MealItemForm.module.css";
import DummyMeal from "../../store/dummy-meals";

const MealItemForm = (props) => {
  const mealCtx = useContext(DummyMeal);
  const inputRef = useRef();

  const addHandler = (event) => {
    event.preventDefault();
    mealCtx.addAmount(props.value.id, inputRef.current.getAmount());

  };

  return (
    <div>
      <form className={classes.form} onSubmit={addHandler}>
        <Input ref={inputRef} onChange={mealCtx.addHandler}></Input>
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
