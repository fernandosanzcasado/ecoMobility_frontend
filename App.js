import "react-native-gesture-handler"; // Import necesario para el react-navigation

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mapa from "./Components/Maps";

export default function App() {
  return (
    <View style={styles.container}>
      <Mapa />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
