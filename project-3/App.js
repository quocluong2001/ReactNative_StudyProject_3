import { React, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'

import fetchFonts from './utils/fetchFonts';
import CategoriesScreen from './screens/CategoriesScreen'

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
    <CategoriesScreen />
  );
}

const styles = StyleSheet.create({

});
