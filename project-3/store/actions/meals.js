export const TOGGLE_FAV = "TOGGLE_FAV";

export const toggleFav = (mealId) => {
  return {
    type: TOGGLE_FAV,
    payload: mealId,
  };
};
