import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import fetchFonts from './utils/fetchFonts';
import MainNavigator from './navigation/MealsNavigators';
import mealsReducer from './store/reducers/meals';

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer)

const useFonts = async () => {
  await fetchFonts()
}

export default function App() {
  const [isLoadedFonts, setIsLoadedFonts] = useState(false)

  if (!isLoadedFonts) {
    return (
      <AppLoading
        startAsync={useFonts}
        onFinish={() => setIsLoadedFonts(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
