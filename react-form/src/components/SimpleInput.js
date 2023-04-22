import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputIsInvalid,
		valueChangeHandler: nameInputChangeHandler,
		inputBlurHandler: nameInputBlurHandler,
		reset: resetNameInput
	} = useInput((value) => value.trim() !== "");
	// const [enteredName, setEnteredName] = useState("");
	// const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	// const enteredNameIsValid = enteredName.trim() !== "";
	// const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const enteredEmailIsValid = enteredEmail.includes("@");
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	let formIsValid = false;
	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	// const nameInputChangeHandler = (event) => {
	// 	setEnteredName(event.target.value);
	// };

	// const nameInputBlurHandler = (event) => {
	// 	setEnteredNameTouched(true);
	// };

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();
		// setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid) {
			return;
		}

		if (!enteredEmailIsValid) {
			return;
		}

		// setEnteredName("");
		// setEnteredNameTouched(false);
		resetNameInput();
		setEnteredEmail("");
		setEnteredEmailTouched(false);
	};

	const nameInputClasses = nameInputIsInvalid
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailInputIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className="error-text">Name must not be empty.</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="emial">Your E-Mail</label>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{emailInputIsInvalid && (
					<p className="error-text">Email must include '@' character.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
