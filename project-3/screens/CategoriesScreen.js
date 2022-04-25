import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import HeaderTitleText from "../components/HeaderTitleText";
import CustomHeaderButton from "../components/CustomHeaderButton";

function CategoriesScreen(props) {
  const navigation = useNavigation();

  const renderListItem = (itemData) => {
    return (
      <CategoryGridTile
        color={{ backgroundColor: itemData.item.color }}
        title={itemData.item.title}
        onSelect={() => {
          //! React navigation 4.x
          // props.navigation.navigate({
          //   routeName: "CategoryMeals",
          //   params: {
          //     CategoryId: itemData.item.id,
          //   },
          // });

          //! React navigation 6.x
          navigation.navigate("MealsOverview", {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={(itemData) => renderListItem(itemData)}
    />
  );
}

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => {
      return <HeaderTitleText>Meal Categories</HeaderTitleText>;
    },
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            iconSize={25}
            onPress={() => {
              navigationData.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
