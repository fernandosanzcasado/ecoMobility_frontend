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

import {
  checkTextInputNotEmpty,
  checkEmail,
  checkUser,
  checkPassword,
  checkPasswordRequeriments,
} from "../helpers/AccountRegister.helper";

const useValidation = () => {
  return {
    checkTextInputNotEmpty,
    checkEmail,
    checkUser,
    checkPassword,
    checkPasswordRequeriments,
  };
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const validation = useValidation();

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
      <ScrollView>
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
            placeholder="Nombre"
            onChangeText={(newText) => setUser(newText)}
            defaultValue={user}
          />
        </View>
        <View>
          <TextInput
            style={styles.tinput}
            placeholder="Apellidos"
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
      </ScrollView>
      <Separator2 />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (
              validation.checkTextInputNotEmpty(
                email,
                user,
                password1,
                password2
              )
            ) {
              if (validation.checkEmail(email)) {
                if (validation.checkUser(user)) {
                  if (validation.checkPassword(password1, password2)) {
                    navigation.navigate("Login");
                  }
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
