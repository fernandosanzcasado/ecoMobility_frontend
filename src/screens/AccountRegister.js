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
      <View>
        <TextInput style={styles.tinput} placeholder="Correo electrónico" />
      </View>
      <View>
        <TextInput style={styles.tinput} placeholder="Nombre de usuario" />
      </View>
      <View>
        <TextInput style={styles.tinput} placeholder="Contraseña" />
      </View>
      <View>
        <TextInput style={styles.tinput} placeholder="Repite la contraseña" />
      </View>
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert("Te has registrado");
          }}
        >
          <Image source={require("../../assets/images/Boton1.png")} />
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
