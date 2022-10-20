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
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const errorControl = (errorId) => {
    switch (errorId) {
      case 1:
        alert("El correo electrónico introducido no es válido");
        break;
      case 2:
        alert("El correo electrónico introducido ya se encuentra registrado");
        break;
      case 3:
        alert("El nombre de usuario debe contener entre 3 y 15 carácteres");
        break;
      case 4:
        alert("El nombre de usuario ya se encuentra en uso");
        break;
      case 5:
        alert("La contraseña debe tener más de 8 carácteres");
        break;
      case 6:
        alert("No has introducido la misma contraseña");
        break;
      case 7:
        alert("Te has registrado satisfactoriamente");
        break;
      case 8:
        alert("Debes rellenar todos los campos");
        break;
      default:
        break;
    }
  };

  const checkTextInputNotEmpty = (email, user, password1, password2) => {
    if (
      email.length == 0 ||
      user.length == 0 ||
      password1.length == 0 ||
      password2.length == 0
    ) {
      errorControl(8);
      return false;
    } else return true;
  };

  const checkEmail = (email) => {
    //console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      errorControl(1);
      //console.log("Email is Not Correct");
      return false;
    } else {
      return true;
      //console.log("Email is Correct");
    }
  };

  const checkUser = (user) => {
    //console.log(user);
    if (user.length <= 3 || user.length >= 15) {
      errorControl(3);
      //console.log("User is Not Correct");
      return false;
    } else {
      return true;
      //console.log("User is Correct");
    }
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

  const checkPasswordRequeriments = (password1) => {
    if (password1.length < 8) return false;
    else return true;
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
      <View>
        <TextInput
          style={styles.tinput}
          placeholder="Correo electrónico"
          onChangeText={(newtext) => setEmail(newtext)}
          defaultValue={email}
        />
      </View>
      <View>
        <TextInput
          style={styles.tinput}
          placeholder="Nombre de usuario"
          onChangeText={(newText) => setUser(newText)}
          defaultValue={user}
        />
      </View>
      <View>
        <TextInput
          style={styles.tinputPassword}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(newText) => setPassword1(newText)}
          defaultValue={password1}
        />
      </View>
      <View>
        <TextInput
          style={styles.tinputPassword}
          placeholder="Repite la contraseña"
          secureTextEntry
          onChangeText={(newText) => setPassword2(newText)}
          defaultValue={password2}
        />
      </View>
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (checkTextInputNotEmpty(email, user, password1, password2)) {
              if (checkEmail(email)) {
                if (checkUser(user)) {
                  checkPassword(password1, password2);
                }
              }
            }
            /*
            if (checkEmail(email) && checkUser(user))
              checkPassword(password1, password2);*/
          }}
        >
          <Image source={require("../../assets/images/Boton1.png")} />
        </TouchableOpacity>
      </View>
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
  tinputPassword: {
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
