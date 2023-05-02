import useInput2 from "../hooks/use-Input2";
const BasicForm = (props) => {
	const {
		enteredValue: firstName,
		valueIsValid: firstNameIsValid,
		hasError: firstNameHasError,
		inputChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: firstNameReset,
	} = useInput2((value) => value.trim() !== "");

	const {
		enteredValue: lastName,
		valueIsValid: lastNameIsValid,
		hasError: lastNameHasError,
		inputChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: lastNameReset,
	} = useInput2((value) => value.trim() !== "");

	const {
		enteredValue: email,
		valueIsValid: emailIsValid,
		hasError: emailHasError,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput2((value) => value.includes("@"));

	const formIsValid = !firstNameIsValid && !lastNameIsValid && !emailIsValid;

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (!formIsValid) return;

		console.log("Submitted!")
		console.log(firstName, lastName, email);
		firstNameReset();
		lastNameReset();
		emailReset();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="control-group">
				<div className={`form-control ${firstNameHasError && "invalid"}`}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={firstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && (
						<p className="error-text">Please Input Valid First Name.</p>
					)}
				</div>
				<div className={`form-control ${lastNameHasError && "invalid"}`}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={lastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameHasError && (
						<p className="error-text">Please Input Valid Last Name.</p>
					)}
				</div>
			</div>
			<div className={`form-control ${emailHasError && "invalid"}`}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="email"
					id="email"
					value={email}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
			</div>
			{emailHasError && (
				<p className="error-text">Please Input Valid Email Value.</p>
			)}

			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
