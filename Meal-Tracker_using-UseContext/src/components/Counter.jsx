import React from 'react';
import { useMealsContext } from './MealsContext';

const Counter = () => {
  const { count } = useMealsContext();
  return <h1 className='h1'>Meals Remaining: {count}</h1>;
};

export default Counter;
