import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";

import LogoText from "../ecomobility/LogoText";

export default function Chatbanner() {
  return (
    <Animatable.View animation="bounceInDown" duration={1000}>
      <SafeAreaView style={styles.capcalera}>
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
        <View style={styles.logo}>
          <LogoText />
        </View>
      </SafeAreaView>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    display: "flex",
    marginLeft: Constants.statusBarHeight * 2,
    marginVertical: Constants.statusBarHeight / 2.5,
  },
});
