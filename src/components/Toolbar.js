import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function Toolbar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>ECO</Text>
      <Text style={styles.text2}>MOBILITY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2D803F",
    paddingTop: StatusBar.currentHeight, // NO SABEMOS SI EN IOS FUNCIONA
    height: 500,
  },
  text1: {
    color: "#BAF35B",
  },
  text2: {
    color: "#FFFFFF",
  },
});
