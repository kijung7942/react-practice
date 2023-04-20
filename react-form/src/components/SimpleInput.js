import { useRef, useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	 const nameInput = useRef();

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		console.log(enteredName);

		const enteredValue = nameInput.current.value;
		console.log(enteredValue);

		// nameInput.current.value = ''; // 리액트를 사용할때 좋은 방법이 아님. 
		setEnteredName('');
	}

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label htmlFor="name">Your Name</label>
				<input ref={nameInput} value={enteredName} type="text" id="name" onChange={nameInputChangeHandler} />
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
