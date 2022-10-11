import "react-native-gesture-handler"; // Import necesario para el react-navigation

import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Mapa from "./Components/Maps";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab"

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab/>

      {/* <View style={styles.container}>
        <Mapa />
        <StatusBar style="auto" />
      </View> */}

    </NavigationContainer>
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
