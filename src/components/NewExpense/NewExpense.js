import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from 'react';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {

		const expenseDate = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseDate);

		props.onSaveExpenseDate(expenseDate);
	};

	const changeEditingMode = () => {
		setIsEditing((flag)=>!flag)
	}

	return (
		<div className="new-expense">
			{isEditing ? (
				<ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} changeEditingMode={changeEditingMode}/>
			) : (
				<button onClick={changeEditingMode}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
