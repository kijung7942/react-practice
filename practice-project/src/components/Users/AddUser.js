import { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [isValid, setIsValid] = useState(true);
	const [errorMsg, setErrorMsg] = useState({ header: "Invalid input" });

	const addUserHandler = (event) => {
		event.preventDefault();
		
		if (!enteredUsername || !enteredAge) {
			setIsValid(false);
			setErrorMsg(
				(msg) =>
					(msg = {
						...msg,
						content: "Please enter a valid name and age (non-empty values).",
					})
			);
			return;
		}
		if (+enteredAge < 1) {
			setIsValid(false);
			setErrorMsg(
				(msg) => (msg = { ...msg, content: "Please enter a valid age (> 0)." })
			);
			return;
		}

		props.addUser({ enteredUsername: enteredUsername, enteredAge: enteredAge });
		setEnteredUsername("");
		setEnteredAge("");
	};

	const changeVaildHandler = () => setIsValid((valid) => !valid);
	const nameChangeHandler = (event) => setEnteredUsername(event.target.value);
	const ageChangeHandler = (event) => setEnteredAge(event.target.value);
	return (
		<div>
			{!isValid && (
				<ErrorModal
					errorMsg={errorMsg}
					changeVaild={changeVaildHandler}
				></ErrorModal>
			)}
			<Card className={styles.input}>
					<form onSubmit={addUserHandler}>
						<label>Username</label>
						<input id="username" value={enteredUsername} type="text" onChange={nameChangeHandler}></input>
						<label>Age(Years)</label>
						<input id="age" value={enteredAge} type="number" onChange={ageChangeHandler}></input>
						<Button type="submit">Add User</Button>
					</form>
			</Card>
		</div>
	);
};

export default AddUser;
