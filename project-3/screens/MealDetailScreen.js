import React, { useState, useLayoutEffect, useEffect } from "react";
import { View, StyleSheet, Image, ScrollView, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";

import CustomHeaderButton from "../components/CustomHeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFav } from "../store/actions/meals";

function ListItem(props) {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

function MealDetailScreen(props) {
  const dispatch = useDispatch();
  //! React Navigation 4.x
  // const mealId = props.navigation.getParam("mealId");

  //! React Navigation 6.x
  const route = useRoute();
  const navigation = useNavigation();

  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;

  const allMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = allMeals.find((meal) => meal.id === mealId);

  const isFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );
  const [favIcon, setFavIcon] = useState(
    isFavorite ? "ios-star" : "ios-star-outline"
  );

  useEffect(() => {
    if (isFavorite === true) {
      setFavIcon("ios-star");
    } else {
      setFavIcon("ios-star-outline");
    }
  }, [isFavorite]);

  //! Configure navigation options React Navigation 6.x
  //! Update navigation options when navigation props change
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favorite"
            iconName={favIcon}
            onPress={() => {
              dispatch(toggleFav(mealId));
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, mealTitle, mealId, favIcon]);

  //! React Navigation 4.x
  // //* re-render only when meal id change
  // const toggleFavoriteHandler = useCallback(() => {
  //   dispatch(toggleFav(mealId));
  // }, [mealId]);

  // //* forward dispatch action to navigation prop
  // useEffect(() => {
  //   props.navigation.setParams({
  //     toggleFavorite: toggleFavoriteHandler,
  //   });
  // }, [toggleFavoriteHandler]);

  // //* forward 'check whether meal is favorite' to navigation prop
  // useEffect(() => {
  //   props.navigation.setParams({
  //     isFav: isFavorite,
  //   });
  // }, [isFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.mealDetail}>
        <DefaultText>
          <Ionicons name="time-outline" size={23} color="black" />
          {selectedMeal.duration}m
        </DefaultText>
        <DefaultText>
          <Ionicons name="create-outline" size={23} color="black" />
          {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText>
          <Ionicons name="cash-outline" size={23} color="black" />
          {selectedMeal.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
}

// MealDetailScreen.navigationOptions = (navigationData) => {
//   const mealTitle = navigationData.navigation.getParam("mealTitle");
//   const toggleFav = navigationData.navigation.getParam("toggleFavorite");
//   const isFav = navigationData.navigation.getParam("isFav");

//   return {
//     headerTitle: () => {
//       return <HeaderTitleText>{mealTitle}</HeaderTitleText>;
//     },
//     headerRight: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//           <Item
//             title="Favorite"
//             iconName={isFav ? "ios-star" : "ios-star-outline"}
//             onPress={toggleFav}
//           />
//         </HeaderButtons>
//       );
//     },
//   };
// };

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: 200,
  },
  mealDetail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
