import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FavoritesScreen from "../../screens/FavoritesScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import defaultHeaderOptions from "./defaultHeaderOptions";

const Stack = createNativeStackNavigator();

function FavStackNavigator() {
  return (
    /*
    ! ISSUE: Blank screen when native stack is nested inside material bottom tabs.
    ! CAUSE: Expo 44 is using React Native 0.64.
    ! FIX: Wrap the Navigator inside of a View.
    */
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        id="FavStack"
        initialRouteName="FavMeals"
        //! General navigation options
        screenOptions={{
          ...defaultHeaderOptions,
          animation: "slide_from_right",
          headerStyle: {
            backgroundColor: "orange",
          },
        }}
      >
        <Stack.Screen
          name="FavMeals"
          component={FavoritesScreen}
          options={{ title: "Favorites" }}
        />
        <Stack.Screen name="FavMealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </View>
  );
}

export default FavStackNavigator;
