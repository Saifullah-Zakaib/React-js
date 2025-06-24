import React from 'react';
import { useMealsContext } from './MealsContext';

const MealsList = () => {
  const { meals, eaten, handleEat } = useMealsContext();

  return (
    <div className="meal-card">
      {Object.entries(meals).map(([meal, description]) => (
        <div key={meal}>
          <h1>{description}</h1>
          <button onClick={() => handleEat(meal)}>
            {eaten[meal] ? "Eaten" : "Eat It"}
          </button>
        </div>
      ))}
    </div>
  );    
};

export default MealsList;
