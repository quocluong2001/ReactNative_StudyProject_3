import { createAction } from "@reduxjs/toolkit";

// export const TOGGLE_FAV = "TOGGLE_FAV";
// export const APPLY_FILTERS = "APPLY_FILTERS";

// export const toggleFav = (mealId) => {
//   return {
//     type: TOGGLE_FAV,
//     payload: mealId,
//   };
// };

// export const applyFilters = (filters) => {
//   return {
//     type: APPLY_FILTERS,
//     payload: filters,
//   };
// };

export const toggleFav = createAction("TOGGLE_FAV", (mealId) => {
  return {
    payload: mealId,
  };
});

export const applyFilters = createAction("APPLY_FILTERS", (filters) => {
  return {
    payload: filters,
  };
});
