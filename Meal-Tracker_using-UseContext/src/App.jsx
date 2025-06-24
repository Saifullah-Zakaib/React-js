import React from 'react';
import './App.css';
import { MealsProvider } from './components/MealsContext';
import MealsList from './components/MealsList';
import Counter from './components/Counter';

function App() {
  return (
    <MealsProvider>
      <div>
        <MealsList />
        <Counter />
      </div>
    </MealsProvider>
  );
}

export default App;
