import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
	const [filterValue, setFilterValue] = useState("2020");

	const changeValueHandler = (selectedYear) => {
		setFilterValue(selectedYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterValue}
					filterChangeHandler={changeValueHandler}
				/>
				{items
					.filter((expense) => expense.date.getFullYear() == filterValue)
					.map((expense) => (
						<ExpenseItem
							key={Math.random()}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						></ExpenseItem>
					))}
			</Card>
		</div>
	);
};
export default Expenses;
