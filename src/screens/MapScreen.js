import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

import Mapa from "../components/map/Maps";
import Toolbar from "../components/ecomobility/Toolbar";
import NavigationTab from "../components/navigation/NavigationTab";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar />
      {/* <Mapa {...DIM} /> */}
      <Mapa style={styles.map} />
      <NavigationTab style={styles.navBar}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  navBar: {
    position: 'absolute',
    borderRadius: 30,
    bottom: Constants.statusBarHeight/2,
    alignSelf: "center",
    width: "95%",
  }, 
  map: {
    height: "90%",
  },
});
