import React from "react";
import { View, Text, StyleSheet } from "react-native";

function HeaderTitleText(props) {
  return (
    <View style={{ padding: 5 }}>
      <Text
        {...props}
        numberOfLines={2}
        adjustsFontSizeToFit={true}
        style={styles.headerTitle}
      >
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
  },
});

export default HeaderTitleText;
