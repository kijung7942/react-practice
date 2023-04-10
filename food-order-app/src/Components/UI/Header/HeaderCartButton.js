import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);

	const numberOfCartItems = cartCtx.items.reduce((acc, cur) => {
		return acc = acc + cur.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span>
				<CartIcon className={classes.icon} />
			</span>

			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
