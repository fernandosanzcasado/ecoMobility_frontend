import React, { Component, useState } from "react";
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

const ConfirmPasswordURL = "http://13.39.20.131:3000/api/v1/me/updatePassword";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Login({ navigation }) {
  const [userOldPassword, setUserOldPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const { t } = useTranslation();
  const validation = useValidation();

  async function createPostPasswordChange() {
    axios
      .post(
        ConfirmPasswordURL,
        {
          checkOldPassword: userOldPassword,
          newPassword: userNewPassword,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        navigation.navigate("Profile");
      })
      .catch(function (error) {
        console.log(error.response.data.message);
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
      <Separator2 />
      <Separator2 />
      <View>
        <Text>{t("Confirm_Current_Pass.Write_Current_Pass")}</Text>
        <TextInput
          style={styles.tinput}
          placeholder={t("Confirm_Current_Pass.Current_Pass")}
          onChangeText={(newtext) => setUserOldPassword(newtext)}
          defaultValue={userOldPassword}
        />
      </View>
      <Separator2 />
      <Separator2 />
      <View>
        <Text>{t("Confirm_Current_Pass.Write_New_Pass")}</Text>
        <TextInput
          style={styles.tinput}
          placeholder={t("Confirm_Current_Pass.New_Pass")}
          onChangeText={(newtext) => setUserNewPassword(newtext)}
          defaultValue={userNewPassword}
        />
      </View>
      <Separator2 />
      <View style={styles.LoginButton}>
        <Button
          title={t("Confirm_Current_Pass.Continue_Button")}
          color="#27CF10"
          style={styles.buttonLogin}
          onPress={() => {
            if (
              validation.checkTextInputNotEmpty(
                userOldPassword,
                userNewPassword
              )
            ) {
              createPostPasswordChange();
            }
          }}
        />
      </View>
      <Separator3 />
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
  LoginButton: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
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
  separator3: {
    marginVertical: 60,
  },
});
