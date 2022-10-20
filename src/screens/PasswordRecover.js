import React, { Component } from "react";
import Constants from "expo-constants";
import * as Font from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container1}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/EcoMobilityIcon2.png")}
        />
      </View>
      <Separator />
      <View>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <Separator2 />
      <Separator2 />
      <Separator2 />
      <View>
        <Text> Introduce tu correo electrónico para buscar tu cuenta </Text>
        <TextInput style={styles.tinput} placeholder="Correo electrónico" />
      </View>
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PasswordRecover2");
          }}
        >
          <Image source={require("../../assets/images/Boton1Buscar.png")} />
        </TouchableOpacity>
      </View>
      <Separator2 />
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image source={require("../../assets/images/BotonAtras.png")} />
        </TouchableOpacity>
      </View>
      <Separator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center",
    paddingTop: 50,
    paddingLeft: 10,
  },
  logo: {
    justifyContent: "center",
    left: 60,
    //padding: 90,
    //width: 260,
    //height: 170,
  },
  lema: {
    justifyContent: "center",
    left: 70,
    //width: 260,
    //height: 170,
  },
  tinput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  but: {
    flex: 1,
    margin: 20,
    margintop: 22,
  },
  button: {
    alignItems: "center",
    right: 5,
    margintop: 2000,
  },
  buttonBack: {
    //alignItems: "left",
    right: -10,
    margintop: 200,
  },
  separator: {
    marginVertical: 11,
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separator2: {
    marginVertical: 5,
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
