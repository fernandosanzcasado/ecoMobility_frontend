import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

import { Button } from "react-native-paper";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";

import {
  checkTextInputPassNotEmpty,
  checkEmail,
  checkUser,
  checkPassword,
  checkPasswordRequeriments,
  errorControl,
} from "../helpers/AccountRegister.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;

const useValidation = () => {
  return {
    checkTextInputPassNotEmpty,
    checkEmail,
    checkUser,
    checkPassword,
    checkPasswordRequeriments,
  };
};

export default function PasswordChange({ navigation }) {
  const possiblePreviousScreens = ["Login", "EditProfile"];
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
          placeholder={t("Password_Change.New_Password")}
          secureTextEntry
          onChangeText={(newText) => setPassword1(newText)}
          defaultValue={password1}
        />
      </View>
      <Separator2 />
      <View>
        <TextInput
          style={styles.tinput}
          placeholder={t("Password_Change.Confirm_New_Password")}
          secureTextEntry
          onChangeText={(newText) => setPassword2(newText)}
          defaultValue={password2}
        />
      </View>
      <Separator2 />
      <Separator2 />
      <View style={styles.buttonView}>
        <Button
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (validation.checkTextInputPassNotEmpty(password1, password2)) {
              if (
                validation.checkPassword(password1, password2)
                //llamada de cambio de pass
              );
            }
          }}
        >
          {t("Pass_Recover_Code_Confirm.Continue_Button")}
        </Button>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    paddingBottom: Constants.statusBarHeight,
  },
  topContainer: {
    width: Constants.paddingBottom,
    height: Constants.statusBarHeight * 4,
    display: "flex",
    flexDirection: "row",
  },
  separationViews: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    marginTop: Constants.statusBarHeight * 2,
    marginLeft: Constants.statusBarHeight * 1.75,
    marginRight: Constants.statusBarHeight * 1,
  },
  lema: {
    marginTop: Constants.statusBarHeight * 2,
    marginLeft: Constants.statusBarHeight * 1.75,
    marginRight: Constants.statusBarHeight * 1,
  },
  textInput: {
    marginTop: Constants.statusBarHeight * 1,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginRight: Constants.statusBarHeight * 0.2,
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonChangePass: {
    orderRadius: 30,
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
  },
  separator2: {
    marginVertical: 5,
  },
  separator3: {
    marginVertical: 80,
  },
});
