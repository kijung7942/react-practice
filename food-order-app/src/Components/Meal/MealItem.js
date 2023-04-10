import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

const MealItem = ({ value }) => {
	const cartCtx = useContext(CartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: value.id,
			name: value.name,
			amount: amount,
			price: value.price,
		});
	};
	return (
		<li className={classes.meal}>
			<div>
				<h3>{value.name}</h3>
				<p className={classes.description}>{value.description}</p>
				<p className={classes.price}>${value.price}</p>
			</div>
			<div>
				<MealItemForm
					onAddToCart={addToCartHandler}
					id={value.id}
					value={value}
				></MealItemForm>
			</div>
		</li>
	);
};

export default MealItem;
