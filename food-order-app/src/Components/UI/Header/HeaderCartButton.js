import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import DummyMeal from "../../../store/dummy-meals";

function HeaderCartButton() {
  const mealCtx = useContext(DummyMeal);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setTotalAmt((totalAmt) => {
      totalAmt = 0;
      return mealCtx.meals
        .map((m) => +m.amount)
        .reduce((acc, cur) => acc + cur, 0);
    });
  }, [mealCtx.meals, totalAmt]);

  return (
    <div>
      <button className={classes.button}>
        <CartIcon className={classes.icon} />
        <span>Your Cart</span>
        <span className={classes.badge}>{totalAmt}</span>
      </button>
    </div>
  );
}

export default HeaderCartButton;
