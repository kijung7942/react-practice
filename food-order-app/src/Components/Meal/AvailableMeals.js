import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-h-c800f-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("somthing went wrong!");
      }

      const responseData = await response.json();

      const loadedMeal = [];

      for (const key in responseData) {
        loadedMeal.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeal);
    };

    fetchMeals().catch((error) => {
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => {
    return <MealItem key={meal.id} value={meal}></MealItem>;
  });

  return (
    <section className={classes.meals}>
      {httpError ? (
        <p className={classes.MealIsLoading}>{httpError}</p>
      ) : meals.length === 0 ? (
        <p className={classes.MealIsLoading}>Loading...</p>
      ) : (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
