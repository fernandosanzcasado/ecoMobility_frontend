import React, { Component, useState, useEffect } from "react";
import Constants from "expo-constants";
import * as Font from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Button } from "react-native-paper";
import { Hideo } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";

import {
  clearText,
  checkTextInputNotEmpty,
  errorControl,
} from "../helpers/Login.helper";
import { createPostLogin } from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const validation = useValidation();
  const { t } = useTranslation();

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
      <View style={styles.separationViews}>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <View style={styles.textInput}>
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"envelope"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Login.Email")}
          onChangeText={(newtext) => setUserEmail(newtext)}
          defaultValue={userEmail}
        />
      </View>
      <Separator />
      <Separator />
      <View style={styles.textInput}>
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Login.Password")}
          onChangeText={(newtext) => setUserPassword(newtext)}
          defaultValue={userPassword}
          secureTextEntry
        />
      </View>
      <Separator />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (validation.checkTextInputNotEmpty(userEmail, userPassword)) {
              console.log("Entro y cumplo el priemr check");
              (async () => {
                if (await createPostLogin(userEmail, userPassword))
                  navigation.navigate("MapScreen");
              })();
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Login.Login_Button")}
          </Text>
        </Button>
      </View>
      <Separator />
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PassRecoverMail");
          }}
        >
          <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
            {t("Login.Forgot_Password")}
          </Text>
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
          <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
            {t("Login.Register_Text")}
          </Text>
        </TouchableOpacity>
      </View>
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
  button: {
    alignItems: "center",
    right: 5,
    margintop: 2000,
  },
  separator: {
    marginVertical: 10,
  },
  separator2: {
    marginVertical: 5,
  },
});
