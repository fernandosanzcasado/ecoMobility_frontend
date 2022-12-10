import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { IconButton } from "react-native-paper";

export default function Buttons() {
  return (
    <View style={styles.structure}>
      <View style={styles.botons}>
        <IconButton
          icon="account-plus"
          color="#29CD5D"
          onPress={() => {
            console.log("Pressed");
          }}
          size={35}
        />
        <Text style={styles.buttonText}>Check-In</Text>
      </View>
      <View style={styles.botons}>
        <IconButton
          icon="clock-start"
          color="#86B9DF"
          onPress={() => {
            console.log("Pressed");
          }}
          size={35}
        />
        <Text style={styles.buttonText}>Anar-hi</Text>
      </View>
      <View style={styles.botons}>
        <IconButton
          icon="account-remove"
          color="#DA6460"
          onPress={() => {
            console.log("Pressed");
          }}
          size={35}
        />
        <Text style={styles.buttonText}>Check-Out</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  structure: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  botons: {
    display: "flex",
    flexDirection: "column",
  },
  buttonText: {
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 12,
  },
});
