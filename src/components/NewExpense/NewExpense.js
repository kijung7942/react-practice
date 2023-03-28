import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {

		const expenseDate = {
			...enteredExpenseData,
			id : Math.random().toString()
		}
		console.log(expenseDate);

		props.onSaveExpenseDate(expenseDate);
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
		</div>
	)
};

export default NewExpense;