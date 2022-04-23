import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import HeaderTitleText from "../components/HeaderTitleText";
import MealsList from "../components/MealsList";

const CategoryMealsScreen = (props) => {
  const allMeals = useSelector((state) => state.meals.meals);
  const catId = props.navigation.getParam("CategoryId");
  const displayedMeals = allMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealsList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("CategoryId");
  const selectedCategory = CATEGORIES.find((category) => category.id === catId);

  return {
    headerTitle: () => {
      return <HeaderTitleText>{selectedCategory.title}</HeaderTitleText>;
    },
  };
};

export default CategoryMealsScreen;
