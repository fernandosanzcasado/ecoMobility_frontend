import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { Button } from "react-native-paper";
import { Hideo, Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import * as Font from "expo-font";
import { useTranslation } from "react-i18next";

import {
  checkTextInputCodeAndPassNotEmpty,
  checkPassword,
} from "../helpers/AccountRegister.helper";
import { createPostRecoverPassword } from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;
const useValidation = () => {
  return {
    checkTextInputCodeAndPassNotEmpty,
    checkPassword,
  };
};

export default function PassRecoverCodeConfirm({ navigation }) {
  const [code, setCode] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const validation = useValidation();
  const { t } = useTranslation();

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      clearText();
    });
    return chargeView;
  }, [navigation]);

  const clearText = () => {
    setCode("");
    setPassword1("");
    setPassword2("");
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
      <View>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Text>{t("Pass_Recover_Code_Confirm.Write_Code")}</Text>
        <Separator2 />
        <Fumi
          label={t("Pass_Recover_Code_Confirm.Code")}
          iconClass={FontAwesomeIcon}
          iconName={"key"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newText) => setCode(newText)}
          defaultValue={code}
        />
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Text>{t("Password_Change.Write_New_Pass")}</Text>
        <Separator2 />
        <Fumi
          label={t("Password_Change.New_Password")}
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
        <Text>{t("Password_Change.Write_New_PassAgain")}</Text>
        <Separator2 />
        <Fumi
          label={t("Password_Change.Confirm_New_Password")}
          iconClass={FontAwesomeIcon}
          iconName={"envelope"}
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
      <Separator2 />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (
              validation.checkTextInputCodeAndPassNotEmpty(
                code,
                password1,
                password2
              )
            ) {
              console.log("CheckTextInputCode ha pasado");
              if (validation.checkPassword(password1, password2)) {
                (async () => {
                  if (await createPostRecoverPassword(code, password1))
                    navigation.navigate("Login");
                })();
              }
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Pass_Recover_Code_Confirm.Continue_Button")}
          </Text>
        </Button>
      </View>
      <View style={styles.buttonBack}>
        <TouchableOpacity
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
    marginTop: Constants.statusBarHeight * 0.0,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginRight: Constants.statusBarHeight * 0.2,
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 0,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonBack: {
    paddingTop: Constants.statusBarHeight * 1,
    paddingLeft: Constants.statusBarHeight * 0.3,
  },
  separator: {
    marginVertical: 10,
  },
  separator2: {
    marginVertical: 5,
  },
  separator3: {
    marginVertical: 110,
  },
});
