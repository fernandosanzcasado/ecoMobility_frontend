import React, { Component, useState, useEffect } from "react";
import Constants from "expo-constants";
import * as Font from "expo-font";
import axios from "axios";

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

import {
  clearText,
  checkTextInputNotEmpty,
  errorControl,
} from "../helpers/Login.helper";
import { useTranslation } from "react-i18next";

const loginURL = "http://13.39.20.131:3000/api/v1/users/login";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const validation = useValidation();

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      clearText();
    });
    return chargeView;
  }, [navigation]);

  const clearText = () => {
    setUserEmail("");
    setUserPassword("");
  };

  async function createPostLogin() {
    console.log("Entro aqui");
    axios
      .post(loginURL, {
        email: userEmail,
        password: userPassword,
      })
      .then(function (response) {
        //escribirCurrentUser(response.data);
        navigation.navigate("MapScreen");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        errorControl(2);
      });
  }

  const { t } = useTranslation();

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
          placeholder={t("Login.Email")}
          onChangeText={(newtext) => setUserEmail(newtext)}
          defaultValue={userEmail}
        />
      </View>
      <Separator2 />
      <View>
        <TextInput
          style={styles.tinput}
          placeholder={t("Login.Password")}
          onChangeText={(newtext) => setUserPassword(newtext)}
          defaultValue={userPassword}
          secureTextEntry
        />
      </View>
      <Separator />
      <View style={styles.LoginButton}>
        <Button
          title={t("Login.Login_Button")}
          color="#27CF10"
          style={styles.buttonLogin}
          onPress={() => {
            if (validation.checkTextInputNotEmpty(userEmail, userPassword)) {
              createPostLogin();
              //navigation.navigate("MapScreen");
            }
          }}
        />
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PassRecoverMail");
          }}
        >
          <Text>{t("Login.Forgot_Password")}</Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("AccountRegister");
          }}
        >
          <Text>{t("Login.Register_Text")}</Text>
        </TouchableOpacity>
      </View>
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
  LoginButton: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonLogin: {
    orderRadius: 30,
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
