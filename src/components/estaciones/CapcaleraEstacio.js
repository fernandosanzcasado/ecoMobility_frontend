import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Rating from "./Rating";

export default function CapcaleraEstacio({ estacion, navigation }) {
  return (
    <View>
      <SafeAreaView style={styles.capcalera}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: Constants.statusBarHeight / 2,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrow-left"
              size={Constants.statusBarHeight / 1.5}
              color="#FFFFFF"
              style={{ marginLeft: Constants.statusBarHeight }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFavourite(!favourite);
            }}
          >
            <Icon
              name={favourite ? "heart" : "heart-o"}
              size={Constants.statusBarHeight / 1.5}
              color={favourite ? "#DF1818" : "#DF1818"}
              style={{ marginRight: Constants.statusBarHeight / 1.5 }}
            ></Icon>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            alignSelf: "center",
            color: "#FFFFFF",
            marginTop: Constants.statusBarHeight / 1.5,
            marginBottom: Constants.statusBarHeight / 1.5,
          }}
        >
          {estacion}
        </Text>
        <Rating />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    width: "100%",
    flexDirection: "column",
  },
});
