// 1. MealsContext.js (Create the context and provider)
import React, { useState, createContext, useContext } from 'react';

const MealsContext = createContext();

const todaysMeals = {
  breakfast: "Two eggs in Breakfast",
  lunch: "Salad In Lunch",
  dinner: "Mutton In Dinner"
};

export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);
  const [eaten, setEaten] = useState({
    breakfast: false,
    lunch: false,
    dinner: false
  });
  const [count, setCount] = useState(3);

  const handleEat = (meal) => {
    if (!eaten[meal]) {
      setEaten({ ...eaten, [meal]: true });
      setCount(count - 1);
    }
  };

  return (
    <MealsContext.Provider value={{ meals, eaten, count, handleEat }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => useContext(MealsContext);
