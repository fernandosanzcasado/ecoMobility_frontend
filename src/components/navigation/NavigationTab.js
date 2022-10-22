import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const iconColor = "#2a5028";
const iconSize = Constants.statusBarHeight * 1.5;

export default function NavigationTab({ style, navigation }) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MapScreen");
        }}
      >
        <Icon name="map-marked-alt" color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Icon name="trophy" color={iconColor} size={iconSize} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Icon name="user-alt" color={iconColor} size={iconSize} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 0.9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#abdea9",
    height: "10%",
    width: "100%",
  },
});
