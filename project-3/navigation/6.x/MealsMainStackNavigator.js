import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsDrawerNavigator from "./MealsDrawerNavigator";
import CategoryMealsScreen from "../../screens/CategoryMealsScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import HeaderTitleText from "../../components/HeaderTitleText";

const Stack = createNativeStackNavigator();

function MealsMainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="MealsCategories"
      //! General navigation options
      screenOptions={{
        animation: "slide_from_right",
        headerStyle: {
          backgroundColor: "#0000FF",
        },
        headerTintColor: "#FFFFFF",
        headerTitle: ({ tintColor, children }) => (
          <HeaderTitleText style={{ color: tintColor }}>
            {children}
          </HeaderTitleText>
        ),
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
  );
}

export default MealsMainStackNavigator;
