import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Button } from "react-native-paper";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import * as Font from "expo-font";
import { useTranslation } from "react-i18next";

import {
  checkTextInputNotEmpty,
  checkEmail,
  checkUser,
  checkPassword,
  checkPasswordRequeriments,
} from "../helpers/AccountRegister.helper";
import { createPostRegister } from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
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

  return (
    <View style={styles.container1}>
      <View style={styles.topContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/EcoMobilityIcon2.png")}
        />
      </View>
      <Separator />
      <Separator />
      <View>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <View style={styles.textInput}>
        <Fumi
          label={t("Login.Email")}
          iconClass={FontAwesomeIcon}
          iconName={"envelope"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserEmail(newtext)}
          defaultValue={userEmail}
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Fumi
          label={t("Account_Register.Name")}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newText) => setUserName(newText)}
          defaultValue={userName}
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Fumi
          label={t("Account_Register.Surnames")}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newText) => setUserSurname(newText)}
          defaultValue={userSurname}
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Fumi
          label={t("Account_Register.Password")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newText) => setPassword1(newText)}
          defaultValue={password1}
          secureTextEntry
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Fumi
          label={t("Account_Register.Confirm_Password")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newText) => setPassword2(newText)}
          defaultValue={password2}
          secureTextEntry
        />
      </View>
      <Separator2 />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
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
                    (async () => {
                      if (
                        await createPostRegister(
                          userEmail,
                          userName,
                          userSurname,
                          password1
                        )
                      )
                        navigation.navigate("Login");
                    })();
                  }
                }
              }
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Account_Register.Register_Button")}
          </Text>
        </Button>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Image source={require("../../assets/images/BotonAtras.png")} />
        </TouchableOpacity>
      </View>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingBottom: Constants.statusBarHeight,
  },
  topContainer: {
    width: Constants.paddingBottom,
    height: Constants.statusBarHeight * 3,
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    marginTop: Constants.statusBarHeight * 1.2,
    marginLeft: Constants.statusBarHeight * 1.75,
    marginRight: Constants.statusBarHeight * 1,
  },
  lema: {
    marginTop: Constants.statusBarHeight * 2,
    marginLeft: Constants.statusBarHeight * 1.75,
    marginRight: Constants.statusBarHeight * 1,
  },
  textInput: {
    marginTop: Constants.statusBarHeight * 0.0005,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginRight: Constants.statusBarHeight * 0.2,
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 0.05,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonBack: {
    paddingTop: Constants.statusBarHeight * 0.6,
    paddingLeft: Constants.statusBarHeight * 0.3,
  },
  separator: {
    marginVertical: 11,
  },
  separator2: {
    marginVertical: 5,
  },
});
