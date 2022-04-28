import React, {
  useState,
  // useEffect,
  // useCallback,
  useLayoutEffect,
} from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import CustomHeaderButton from "../components/CustomHeaderButton";
// import HeaderTitleText from "../components/HeaderTitleText";
import { applyFilters } from "../store/actions/meals";

function FilterItem(props) {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{props.filterTitle}</Text>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        trackColor={{ true: "blue", false: "gray" }}
        thumbColor="blue"
        style={styles.switch}
      />
    </View>
  );
}

function FiltersScreen(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  //! React Navigation 4.x
  // const saveFilters = useCallback(() => {
  //   const appliedFilters = {
  //     glutenFree: isGlutenFree,
  //     vegan: isVegan,
  //     vegetarian: isVegetarian,
  //     lactoseFree: isLactoseFree,
  //   };
  // }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  //! React Navigation 4.x
  // useEffect(() => {
  //   props.navigation.setParams({ save: saveFilters });
  // }, [saveFilters]);

  function saveButtonHandler() {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    };
    dispatch(applyFilters(appliedFilters));
  }

  //! React Navigation 6.x
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Save"
            iconName="save"
            iconSize={23}
            onPress={saveButtonHandler}
            buttonStyle={styles.headerSaveButton}
          />
        </HeaderButtons>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <FilterItem
        filterTitle="Gluten-free"
        value={isGlutenFree}
        onChange={(value) => setIsGlutenFree(value)}
      />
      <FilterItem
        filterTitle="Vegan"
        value={isVegan}
        onChange={(value) => setIsVegan(value)}
      />
      <FilterItem
        filterTitle="Vegetarian"
        value={isVegetarian}
        onChange={(value) => setIsVegetarian(value)}
      />
      <FilterItem
        filterTitle="Lactose-free"
        value={isLactoseFree}
        onChange={(value) => setIsLactoseFree(value)}
      />
    </View>
  );
}

//! React Navigation 4.x
// FiltersScreen.navigationOptions = (navigationData) => {
//   const filters = navigationData.navigation.getParam("save");
//   console.log(filters);
//   return {
//     headerTitle: () => {
//       return <HeaderTitleText>Meals Filters</HeaderTitleText>;
//     },
//     headerLeft: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//           <Item
//             title="Menu"
//             iconName="menu"
//             iconSize={25}
//             onPress={() => {
//               navigationData.navigation.toggleDrawer();
//             }}
//           />
//         </HeaderButtons>
//       );
//     },
//     headerRight: () => {
//       return (
//         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
//           <Item
//             title="Save"
//             iconName="save"
//             iconSize={23}
//             onPress={navigationData.navigation.getParam("save")}
//             buttonStyle={styles.headerSaveButton}
//           />
//         </HeaderButtons>
//       );
//     },
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  headerSaveButton: {
    fontFamily: "open-sans",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  filterTitle: {
    fontFamily: "open-sans",
    fontSize: 18,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
});

export default FiltersScreen;
