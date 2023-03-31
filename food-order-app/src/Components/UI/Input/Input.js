import React, { useRef, useImperativeHandle, useState } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const [amount, setAmount] = useState(1);

  useImperativeHandle(ref, () => {
    return {
      getAmount: getAmount,
    };
  });

  const onChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const getAmount = () => {
    const returnVal = amount;
    setAmount(1);
    return amount;
  };
  return (
    <div className={classes.input}>
      <label htmlFor="amountInput">Amount </label>
      <input
        ref={ref}
        id="amountInput"
        type="number"
        name="amount"
        value={amount}
        onChange={onChangeHandler}
      ></input>
    </div>
  );
});

export default Input;
