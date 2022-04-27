import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../../screens/CategoriesScreen";
import FiltersScreen from "../../screens/FiltersScreen";
import defaultHeaderOptions from "./defaultHeaderOptions";

const Drawer = createDrawerNavigator();

function MealsDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="AllCategories"
      //! General navigation options
      screenOptions={{
        ...defaultHeaderOptions,
        drawerActiveTintColor: "#0000FF",
        drawerLabelStyle: {
          fontFamily: "open-sans-bold",
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="AllCategories"
        component={CategoriesScreen}
        //! Screen navigation options
        options={{
          drawerLabel: "Meals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="restaurant" size={size} color={color} />
          ),
          title: "All Categories",
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FiltersScreen}
        //! Screen navigation options
        options={{
          drawerLabel: "Filters",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="filter" size={size} color={color} />
          ),
          title: "Filters",
        }}
      />
    </Drawer.Navigator>
  );
}

export default MealsDrawerNavigator;
