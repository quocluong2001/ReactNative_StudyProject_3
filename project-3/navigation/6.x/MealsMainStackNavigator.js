import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";

const Stack = createNativeStackNavigator();

function MealsMainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategories"
      screenOptions={{
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: "#0000FF",
        },
        headerTintColor: "#FFFFFF",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          headerTitle: "Categories",
        }}
      />
      <Stack.Screen name="MealsOverview" component={CategoryMealsScreen} />
    </Stack.Navigator>
  );
}

export default MealsMainStackNavigator;
