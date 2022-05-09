import { createContext, useState, useContext } from "react";

import { MEALS } from "../../data/dummy-data";

const mealState = {
  meals: MEALS,
  filterMeals: MEALS,
  favoriteMeals: [],
  addFavoriteMeal: () => {},
  removeFavoriteMeal: () => {},
};

export const MealContext = createContext(mealState);

function MealContextProvider({ children }) {
  const [favMeals, setFavMeals] = useState([]);

  function addFavoriteMeal(mealId) {
    const favoriteMeal = mealState.meals.find((meal) => meal.id === mealId);
    setFavMeals((currentFavMeals) => [...currentFavMeals, favoriteMeal]);
  }

  function removeFavoriteMeal(mealId) {
    setFavMeals((currentFavMeals) =>
      currentFavMeals.filter((meal) => meal.id != mealId)
    );
  }

  const value = {
    ...mealState,
    favoriteMeals: favMeals,
    addFavoriteMeal: addFavoriteMeal,
    removeFavoriteMeal: removeFavoriteMeal,
  };

  return <MealContext.Provider value={value}>{children}</MealContext.Provider>;
}

export default MealContextProvider;
