import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MealsMainStackNavigator from "./MealsMainStackNavigator";
import FavStackNavigator from "./FavStackNavigator";

const Tab = createMaterialBottomTabNavigator();

function MealsMainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MainCategories">
      <Tab.Screen name="MainCategories" component={MealsMainStackNavigator} />
      <Tab.Screen name="Favorites" component={FavStackNavigator} />
    </Tab.Navigator>
  );
}

export default MealsMainTabNavigator;
