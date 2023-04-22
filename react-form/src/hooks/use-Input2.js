import { useState } from "react";

const useInput2 = (validationFn) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = !validationFn(enteredValue)
	const hasError = isTouched && valueIsValid;

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	}

	const inputChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setIsTouched(true);
	};

	return {
	  enteredValue,
		valueIsValid,
		isTouched,
		hasError,
		inputChangeHandler,
		inputBlurHandler,
		reset
	}
};

export default useInput2;
