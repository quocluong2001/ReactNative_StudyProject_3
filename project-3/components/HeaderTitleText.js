import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

function HeaderTitleText(props) {
  const { width } = Dimensions.get("window");
  return (
    <View style={{ width: width * 0.7 }}>
      <Text
        {...props}
        numberOfLines={2}
        adjustsFontSizeToFit={true}
        ellipsizeMode="tail"
        style={[styles.headerTitle, props.style]}
      >
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default HeaderTitleText;
