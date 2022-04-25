import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

import tabScreen from "./tabScreen";

const MealsTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreen, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreen, {
        tabBarOptions: {
          activeTintColor: "blue",
          labelStyle: {
            fontFamily: "open-sans-bold",
          },
        },
      });

export default MealsTabNavigator;
