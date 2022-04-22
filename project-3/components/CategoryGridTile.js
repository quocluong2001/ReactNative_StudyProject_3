import React from "react";
import { View, Text, StyleSheet, Platform, Pressable } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={props.onSelect}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) =>
          pressed
            ? Platform.OS === "ios"
              ? [styles.container, styles.pressed, props.color]
              : [styles.container, props.color]
            : [styles.container, props.color]
        }
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    overflow: "hidden",
    borderRadius: 15,
    margin: 15,
    height: 150,
    elevation: 5,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  pressed: {
    opacity: 0.75,
  },

  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default CategoryGridTile;
