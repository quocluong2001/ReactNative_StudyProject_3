import { createStackNavigator } from "react-navigation-stack";

import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import defaultStackNavOptions from "./defaultStackNavOptions";

const FavMealsStackNavigator = createStackNavigator(
  {
    FavScreen: {
      screen: FavoritesScreen,
    },
    MealDetail: {
      screen: MealDetailScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions({
      headerStyle: {
        backgroundColor: "orange",
      },
    }),
  }
);

export default FavMealsStackNavigator;
