import React, { useState } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    amount: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
  },
];

const DummyMeal = React.createContext({
  meals: [],
  addAmount: (id, amount) => {},
  minusAmount: (id, amount) => {},
});

export const DummyMealProvider = (props) => {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  

  const addHandler = (id, amount) => {
    console.log(`${id}: plus ${amount}`);
    setMeals((meals) => {
      const filteredMeal = meals.filter(m => m.id !== id);
      const findedMeal = meals.find(m => m.id === id);
      findedMeal.amount += amount;
      const returnArr = [...filteredMeal, findedMeal];
      console.log(returnArr[0].id.charAt(1));
      console.log(returnArr.sort((a,b) => {return (a.id).charAt(1) > (b.id).charAt(1) ? 1 : 0})[0]);
      return returnArr.sort((m1,m2) => m1.id > m2.id ? 1 : 0);
    });
  };

  const minusHandler = (id, amount) => {
    console.log(`${id}: minus ${amount}`);
  };

  return (
    <DummyMeal.Provider
      value={{ meals: meals, addAmount: addHandler, minusAmount: minusHandler }}
    >
      {props.children}
    </DummyMeal.Provider>
  );
};

export default DummyMeal;
