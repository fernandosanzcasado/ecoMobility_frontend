import "react-native-gesture-handler"; // Import necesario para el react-navigation

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/components/navigation/NavigationTab";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}
