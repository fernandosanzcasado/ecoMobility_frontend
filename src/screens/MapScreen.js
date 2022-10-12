import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Mapa from "../components/map/Maps";
import Toolbar from "../components/Toolbar";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen() {
  return (
    <SafeAreaView>
      <Toolbar />
      {/* <Mapa {...DIM} /> */}
      <Mapa />
    </SafeAreaView>
  );
}
