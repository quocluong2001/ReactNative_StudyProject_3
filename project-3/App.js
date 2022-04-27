import React from "react";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

//! React Navigation 6.x
import { NavigationContainer } from "@react-navigation/native";

//! React Navigation 4.x
import MainNavigator from "./navigation/MealsNavigators";
import mealsReducer from "./store/reducers/meals";

//! React Navigation 6.x
import MealsMainTabNavigator from "./navigation/6.x/MealsMainTabNavigator";

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [isFontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MealsMainTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
