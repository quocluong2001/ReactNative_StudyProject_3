import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAV } from "../actions/meals";
import { APPLY_FILTERS } from "../actions/meals";

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

function applyFilters(state, action) {
  const filteredMeals = state.meals.filter((meal) => {
    if (
      action.payload.glutenFree &&
      meal.isGlutenFree != action.payload.glutenFree
    ) {
      return false;
    }
    if (action.payload.vegan && meal.isVegan != action.payload.vegan) {
      return false;
    }
    if (
      action.payload.vegetarian &&
      meal.isVegetarian != action.payload.vegetarian
    ) {
      return false;
    }
    if (
      action.payload.lactoseFree &&
      meal.isLactoseFree != action.payload.lactoseFree
    ) {
      return false;
    }

    return true;
  });

  return {
    ...state,
    filterMeals: filteredMeals,
  };
}

function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_FAV:
      return toggleFavorite(state, action);
    case APPLY_FILTERS:
      return applyFilters(state, action);
    default:
      return state;
  }
}

export default mealsReducer;
