import React from "react";
import { Text, StyleSheet } from "react-native";

function DefaultText(props) {
  return (
    <Text {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;
