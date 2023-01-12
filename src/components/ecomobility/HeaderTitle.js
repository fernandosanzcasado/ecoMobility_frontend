import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";

export default function HeaderTitle({ name, navigation }) {
  return (
    <SafeAreaView style={styles.capcalera}>
      <View style={styles.headerContent}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrow-left"
            size={Constants.statusBarHeight / 1.5}
            color="#FFFFFF"
            style={styles.backicon}
          ></Icon>
        </TouchableOpacity>
        <Text style={styles.title}>{name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    width: "100%",
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backicon: {
    marginLeft: Constants.statusBarHeight,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    fontFamily: "comfortaaBold",
    alignSelf: "center",
    color: "#FFFFFF",
    marginTop: Constants.statusBarHeight / 1.5,
    marginBottom: Constants.statusBarHeight,
  },
});
