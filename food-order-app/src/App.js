import { useState } from "react";
import Header from "./Components/UI/Header/Header";
import MealsSummary from "./Components/Meal/MealsSummary";
import AvailableMeals from "./Components/Meal/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import CartProvider from './store/CartProvider';

const App = () => {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = () => {
		setCartIsShown(true);
	};

	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<CartProvider>
			{cartIsShown && <Cart onHideCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<MealsSummary></MealsSummary>
			<AvailableMeals></AvailableMeals>
		</CartProvider>
	);
};

export default App;
