import { useState, useEffect } from 'react';
import Autocomplete from './components/autocomplete/Autocomplete';
import Footer from './components/Footer';
import Meal from './components/Meal';
import './App.css';
function App() {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState({});
  //async fetch data function
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((err) => {
        console.log(err);
        setMeals([]);
      });
  }, []);
  return (
    <div className="app-container">
      <h3 className="app-title">Meals</h3>
      <div style={{ minWidth: '300px' }}>
        <Autocomplete
          arrayItems={meals}
          itemLocation="item.strMeal"
          onClickResult={(e, item) =>
            setCurrentMeal({ title: item.strMeal, img: item.strMealThumb })
          }
        />
      </div>
      <Meal {...currentMeal} />
      <Footer />
    </div>
  );
}

export default App;
