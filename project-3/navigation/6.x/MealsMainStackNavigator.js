import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "../../screens/CategoriesScreen";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";

const Stack = createNativeStackNavigator();

function MealsMainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MealsCategories">
      <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      <Stack.Screen name="MealsOverview" component={CategoryMealsScreen} />
    </Stack.Navigator>
  );
}

export default MealsMainStackNavigator;
