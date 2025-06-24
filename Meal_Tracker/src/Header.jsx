import { useState } from 'react';

const Header = (props) => {
  const [count, setCount] = useState(3);
  const [eaten, setEaten] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });

  const handleEat = (meal) => {
    if (!eaten[meal]) {
      setEaten({ ...eaten, [meal]: true });
      setCount(count - 1);
    }
  };

  return (
    <div className='meal-card'>
      <h1>{props.Breakfast}</h1>
      <button onClick={() => handleEat("breakfast")}>
        {eaten.breakfast ? "Eaten" : "Eat It"}
      </button>

      <h1>{props.Lunch}</h1>
      <button onClick={() => handleEat("lunch")}>
        {eaten.lunch ? "Eaten" : "Eat It"}
      </button>

      <h1>{props.Dinner}</h1>
      <button onClick={() => handleEat("dinner")}>
        {eaten.dinner ? "Eaten" : "Eat It"}
      </button>

      <h1 className='h1'> Meals Remaining: {count}</h1>
    </div>
  );
};

export default Header;
