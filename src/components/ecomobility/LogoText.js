import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function LogoText({ style }) {
  return (
    <View style={[styles.text, style]}>
      <Text style={styles.eco}> eco</Text>
      <Text style={styles.mobility}>Mobility </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  eco: {
    color: "#BAF35B",
    fontSize: 30,
  },
  mobility: {
    color: "#FFFFFF",
    fontSize: 30,
  },
});
