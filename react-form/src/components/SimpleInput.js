import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInput = useRef();
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false)

	useEffect(() => {
		if(enteredNameIsValid) {
			console.log("name input is Valid")
		}
	}, [enteredNameIsValid])

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);

		if (!enteredName.trim()) {
			setEnteredNameIsValid(false);
			return;
		}
		setEnteredNameIsValid(true);
		console.log(enteredName);

		const enteredValue = nameInput.current.value;
		console.log(enteredValue);

		// nameInput.current.value = ''; // 리액트를 사용할때 좋은 방법이 아님.
		setEnteredName("");
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);

		if (!enteredName.trim()) {
			setEnteredNameIsValid(false);
			return;
		}
		
	}

	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid': 'form-control'
	return (
		<form onSubmit={formSubmitHandler} className={nameInputClasses}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input
					ref={nameInput}
					value={enteredName}
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
				/>
				{nameInputIsInvalid && <p className='error-text'>Name must not be empty.</p>}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
