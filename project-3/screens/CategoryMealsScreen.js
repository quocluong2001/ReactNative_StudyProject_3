import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
// import HeaderTitleText from "../components/HeaderTitleText";
import MealsList from "../components/MealsList";
// import { MealContext } from "../store/context/MealContext";

function CategoryMealsScreen(props) {
  //! React Navigation 6.x
  const navigation = useNavigation();
  const route = useRoute();

  const catId = route.params.categoryId;
  const headerTitle = route.params.categoryTitle;

  //! Redux
  const allMeals = useSelector((state) => state.meals.filterMeals);
  const displayedMeals = allMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  //! Context API
  // const mealCtx = useContext(MealContext);
  // const displayedMeals = mealCtx.meals.filter(
  //   (meal) => meal.categoryIds.indexOf(catId) >= 0
  // );

  //! Configure navigation options React Navigation 6.x
  //! Update navigation options when navigation props changed
  useLayoutEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [navigation, headerTitle]);

  return <MealsList listData={displayedMeals} />;
}

//! Configure navigation options React Navigation 4.x
// CategoryMealsScreen.navigationOptions = (navigationData) => {
//   const catId = navigationData.navigation.getParam("CategoryId");
//   const selectedCategory = CATEGORIES.find((category) => category.id === catId);

//   return {
//     headerTitle: () => {
//       return <HeaderTitleText>{selectedCategory.title}</HeaderTitleText>;
//     },
//   };
// };

export default CategoryMealsScreen;
