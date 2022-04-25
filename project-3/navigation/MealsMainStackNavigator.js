import { createStackNavigator } from "react-navigation-stack";

import defaultStackNavOptions from "./defaultStackNavOptions";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsMainStackNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions({
      headerStyle: {
        backgroundColor: "blue",
      },
    }),
  }
);

export default MealsMainStackNavigator;
