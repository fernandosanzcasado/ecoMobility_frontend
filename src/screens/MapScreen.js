import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

import Mapa from "../components/map/Maps";
import Toolbar from "../components/ecomobility/Toolbar";
import NavigationTab from "../components/navigation/NavigationTab";
import UserChat from "./UserChat";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen({ style, navigation }) {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      {/* <Toolbar navigation={navigation} /> */}
      {/* <Mapa {...DIM} /> */}
      {/* <Mapa style={styles.map} navigation={navigation} /> */}
      <UserChat />
      {/* <NavigationTab style={styles.navBar} navigation={navigation} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  navBar: {
    position: "absolute",
    borderRadius: 30,
    bottom: Constants.statusBarHeight / 2,
    alignSelf: "center",
    width: "95%",
  },
  map: {
    height: "90%",
  },
});
