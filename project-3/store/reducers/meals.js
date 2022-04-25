import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filterMeals: MEALS,
  favoriteMeals: [],
};

function removeFavoriteMeal(favoriteMeals, item) {
  return favoriteMeals.filter((meal) => meal.id != item.id);
}

function addFavoriteMeal(favoriteMeals, item) {
  const updatedArray = [...favoriteMeals];
  updatedArray.unshift(item);
  return updatedArray;
}

function toggleFavorite(state, action) {
  const favoriteMeal = state.favoriteMeals.find(
    (meal) => meal.id === action.payload
  );

  if (favoriteMeal != undefined) {
    return {
      ...state,
      favoriteMeals: removeFavoriteMeal(state.favoriteMeals, favoriteMeal),
    };
  } else {
    const meal = state.meals.find((meal) => meal.id === action.payload);
    return {
      ...state,
      favoriteMeals: addFavoriteMeal(state.favoriteMeals, meal),
    };
  }
}

function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAV:
      return toggleFavorite(state, action);
    default:
      return state;
  }
}

export default mealsReducer;
