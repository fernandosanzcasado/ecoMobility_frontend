import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Mapa from "../components/map/Maps";
import Toolbar from "../components/ecomobility/Toolbar";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar />
      {/* <Mapa {...DIM} /> */}
      <Mapa />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
});
