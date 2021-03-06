import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsDrawerNavigator from "./MealsDrawerNavigator";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import defaultHeaderOptions from "./defaultHeaderOptions";

const Stack = createNativeStackNavigator();

function MealsMainStackNavigator() {
  return (
    /*
    ! ISSUE: Blank screen when native stack is nested inside material bottom tabs.
    ! CAUSE: Expo 44 is using React Native 0.64.
    ! FIX: Wrap the Navigator inside of a View.
    */
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        id="MealsMainStack"
        initialRouteName="MealsCategories"
        //! General navigation options
        screenOptions={{
          ...defaultHeaderOptions,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={MealsDrawerNavigator}
          //! Screen navigation options
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MealsOverview" component={CategoryMealsScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </View>
  );
}

export default MealsMainStackNavigator;
