import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../../assets/meals.jpg";

const Header = (props) => {
	return (
		<Fragment>
			<div className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</div>
			<div className={classes["main-image"]}>
				<img src={mealsImage}></img>
			</div>
		</Fragment>
	);
};

export default Header;
