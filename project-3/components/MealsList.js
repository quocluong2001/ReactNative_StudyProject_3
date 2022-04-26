import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import MealItem from "./MealItem";

function MealsList(props) {
  //! React Navigation 6.x
  const navigation = useNavigation();

  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  function renderMealItem(itemData) {
    const isFavorite = favMeals.some((meal) => meal.id === itemData.item.id);

    return (
      <MealItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          //! React Navigation 4.x
          // navigation.navigate({
          //   routeName: "MealDetail",
          //   params: {
          //     mealId: itemData.item.id,
          //     mealTitle: itemData.item.title,
          //     isFav: isFavorite,
          //   },
          // });

          //! React Navigation 6.x
          navigation.navigate("MealDetail", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFav: isFavorite,
          });
        }}
      />
    );
  }

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
        contentContainerStyle={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});

export default MealsList;
