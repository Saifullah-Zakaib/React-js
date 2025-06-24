import { useState } from 'react'
import './App.css'
import Header from './Header.jsx';

function App() {
  const data = {
    Breakfast: "Two eggs in Breakfast",
    Lunch: "Salad In Lunch",
    Dinner: "Mutton In Dinner"
  }

  return (
    <div>
      <Header
        Breakfast={data.Breakfast}
        Lunch={data.Lunch}
        Dinner={data.Dinner}
      />
    </div>
  )
}

export default App
