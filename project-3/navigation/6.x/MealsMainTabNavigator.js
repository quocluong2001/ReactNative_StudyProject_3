import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MealsMainStackNavigator from "./MealsMainStackNavigator";
import FavStackNavigator from "./FavStackNavigator";

const Tab = createMaterialBottomTabNavigator();

function MealsMainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MainCategories" shifting={true}>
      <Tab.Screen
        name="MainCategories"
        component={MealsMainStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food" size={25} color={color} />
          ),
          tabBarLabel: "All Categories",
          tabBarColor: "#0000FF",
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="star" size={25} color={color} />
          ),
          tabBarColor: "orange",
        }}
      />
    </Tab.Navigator>
  );
}

export default MealsMainTabNavigator;
