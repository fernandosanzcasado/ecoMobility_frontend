import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import LogoText from "./LogoText";

export default function Toolbar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <LogoText />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D803F",
    paddingTop: Constants.statusBarHeight, // NO SABEMOS SI EN IOS FUNCIONA
    height: "10%",
    width: "100%",
  },
});
