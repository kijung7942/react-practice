import { Fragment } from "react";
import Header from "./Components/UI/Header/Header";
import MealsSummary from "./Components/Meal/MealsSummary";
import AvailableMeals from "./Components/Meal/AvailableMeals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default App;
