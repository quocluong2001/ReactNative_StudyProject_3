import  React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';

import fetchFonts from './utils/fetchFonts';
import MainNavigator from './navigation/MealsNavigators';

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
    <MainNavigator />
  );
}

const styles = StyleSheet.create({

});
