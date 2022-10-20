import React, { Component, useState } from "react";
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
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const errorControl = (errorId) => {
    switch (errorId) {
      case 6:
        alert("No has introducido la misma contraseña");
        break;
      case 5:
        alert("La contraseña debe tener más de 8 carácteres");
        break;
      case 7:
        alert("Has cambiado la contraseña satisfactoriamente");
        break;
      case 8:
        alert("Debes rellenar todos los campos");
        break;
      default:
        break;
    }
  };
  const checkTextInputNotEmpty = (password1, password2) => {
    if (password1.length == 0 || password2.length == 0) {
      errorControl(8);
      return false;
    } else return true;
  };

  const checkPasswordRequeriments = (password1) => {
    if (password1.length < 8) return false;
    else return true;
  };

  const checkPassword = (password1, password2) => {
    if (
      checkPasswordRequeriments(password1) &&
      checkPasswordRequeriments(password2)
    ) {
      if (password1 != password2) {
        //alert("No has introducido la misma contraseña");
        errorControl(6);
        return false;
      } else {
        //alert("Te has registrado satisfactoriamente");
        navigation.navigate("Login");
        errorControl(7);
        return true;
      }
    } else {
      if (password1 != password2) errorControl(6);
      //alert("No has introducido la misma contraseña");
      else errorControl(5);
      //alert("La contraseña debe tener más de 8 carácteres");
      return false;
    }
  };

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
        <TextInput
          style={styles.tinput}
          placeholder="Contraseña nueva"
          secureTextEntry
          onChangeText={(newText) => setPassword1(newText)}
          defaultValue={password1}
        />
      </View>
      <Separator2 />
      <View>
        <TextInput
          style={styles.tinput}
          placeholder="Repite la nueva contraseña"
          secureTextEntry
          onChangeText={(newText) => setPassword2(newText)}
          defaultValue={password2}
        />
      </View>
      <Separator2 />
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (checkTextInputNotEmpty(password1, password2)) {
              checkPassword(password1, password2);
            }
          }}
        >
          <Image
            source={require("../../assets/images/Boton1CambiarContraseña.png")}
          />
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