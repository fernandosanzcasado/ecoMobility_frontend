import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import LogoText from "./LogoText";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Toolbar({ style, navigation }) {
  return (
    <View style={[styles.container, style]}>
      <LogoText />
      <View style={styles.iconPack}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SearchBar");
          }}
        >
          <Icon
            name="search"
            size={Constants.statusBarHeight}
            style={styles.icono}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Filters");
          }}
        >
          <Icon
            name="sliders-h"
            size={Constants.statusBarHeight}
            style={styles.icono}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2D803F",
    paddingTop: Constants.statusBarHeight, // NO SABEMOS SI EN IOS FUNCIONA
    paddingRight: Constants.statusBarHeight,
    height: "10%",
    width: "100%",
  },
  iconPack: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifySelf: "center",
    flex: 0,
  },
  icono: {
    color: "white",
    paddingLeft: Constants.statusBarHeight / 2,
    justifyContent: "center",
  },
});
