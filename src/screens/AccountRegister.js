import React, { Component, useState } from "react";
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

import Constants from "expo-constants";
import * as Font from "expo-font";
import { useTranslation } from "react-i18next";
import axios from "axios";

const registerURL = "http://13.39.20.131:3000/api/v1/users/register";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

import {
  checkTextInputNotEmpty,
  checkEmail,
  checkUser,
  checkPassword,
  checkPasswordRequeriments,
  errorControl,
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
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const validation = useValidation();

  const { t } = useTranslation();

  async function createPostRegister() {
    axios
      .post(registerURL, {
        email: userEmail,
        name: userName,
        surnames: userSurname,
        password: password1,
      })
      .then(function (response) {
        console.log(response);
        errorControl(7);
        navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log(error);
        errorControl(2);
      });
  }

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
            placeholder={t("Account_Register.Email")}
            onChangeText={(newtext) => setUserEmail(newtext)}
            defaultValue={userEmail}
          />
        </View>
        <View>
          <TextInput
            style={styles.tinput}
            placeholder={t("Account_Register.Name")}
            onChangeText={(newText) => setUserName(newText)}
            defaultValue={userName}
          />
        </View>
        <View>
          <TextInput
            style={styles.tinput}
            placeholder={t("Account_Register.Surnames")}
            onChangeText={(newText) => setUserSurname(newText)}
            defaultValue={userSurname}
          />
        </View>
        <View>
          <TextInput
            style={styles.tinputPassword}
            placeholder={t("Account_Register.Password")}
            secureTextEntry
            onChangeText={(newText) => setPassword1(newText)}
            defaultValue={password1}
          />
        </View>
        <View>
          <TextInput
            style={styles.tinputPassword}
            placeholder={t("Account_Register.Confirm_Password")}
            secureTextEntry
            onChangeText={(newText) => setPassword2(newText)}
            defaultValue={password2}
          />
        </View>
      </ScrollView>
      <Separator2 />
      <View style={styles.RegisterButton}>
        <Button
          title={t("Account_Register.Register_Button")}
          color="#27CF10"
          style={styles.buttonRegister}
          onPress={() => {
            if (
              validation.checkTextInputNotEmpty(
                userEmail,
                userName,
                password1,
                password2
              )
            ) {
              if (validation.checkEmail(userEmail)) {
                if (validation.checkUser(userName)) {
                  if (validation.checkPassword(password1, password2)) {
                    createPostRegister();
                  }
                }
              }
            }
          }}
        />
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
  },
  lema: {
    justifyContent: "center",
    left: 70,
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
  RegisterButton: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonRegister: {
    orderRadius: 30,
  },
  button: {
    alignItems: "center",
    right: 5,
    margintop: 2000,
  },
  buttonBack: {
    right: -10,
    margintop: 200,
  },
  separator: {
    marginVertical: 11,
  },
  separator2: {
    marginVertical: 5,
  },
});
