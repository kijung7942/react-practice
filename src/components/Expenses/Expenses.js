import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = ({ items }) => {
	const [filteredYead, setFilteredYear] = useState("2020");

	const changeValueHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter(
		(expense) => expense.date?.getFullYear().toString() == filteredYead
	);

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYead}
					filterChangeHandler={changeValueHandler}
				/>
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
};
export default Expenses;
