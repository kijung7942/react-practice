import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
	return (
		<Card className="expenses">
			{items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				></ExpenseItem>
			))}
		</Card>
	);
};
export default Expenses;
