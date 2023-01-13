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
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Button } from "react-native-paper";
import { Hideo, Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";

import {
  checkTextInputConfirmCurrentPassNotEmpty,
  checkPassword,
} from "../helpers/AccountRegister.helper";
import { createPutPasswordChange } from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;

const useValidation = () => {
  return { checkTextInputConfirmCurrentPassNotEmpty, checkPassword };
};

export default function Login({ navigation }) {
  const [userOldPassword, setUserOldPassword] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPassword2, setUserNewPassword2] = useState("");
  const { t } = useTranslation();
  const validation = useValidation();

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
        <Text>{t("Confirm_Current_Pass.Write_Current_Pass")}</Text>
        <Separator2 />
        <Fumi
          label={t("Confirm_Current_Pass.Current_Pass")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserOldPassword(newtext)}
          defaultValue={userOldPassword}
          secureTextEntry
        />

        {/*}
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Confirm_Current_Pass.Current_Pass")}
          secureTextEntry
          onChangeText={(newtext) => setUserOldPassword(newtext)}
          defaultValue={userOldPassword}
        />
  */}
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Text>{t("Confirm_Current_Pass.Write_New_Pass")}</Text>
        <Separator2 />
        <Fumi
          label={t("Confirm_Current_Pass.New_Pass")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserNewPassword(newtext)}
          defaultValue={userNewPassword}
          secureTextEntry
        />
        {/*}
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Confirm_Current_Pass.New_Pass")}
          secureTextEntry
          onChangeText={(newtext) => setUserNewPassword(newtext)}
          defaultValue={userNewPassword}
        />
*/}
      </View>
      <Separator2 />
      <View style={styles.textInput}>
        <Text>{t("Confirm_Current_Pass.Write_New_Pass_Again")}</Text>
        <Separator2 />
        <Fumi
          label={t("Confirm_Current_Pass.Repeat_New_Pass")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserNewPassword2(newtext)}
          defaultValue={userNewPassword2}
          secureTextEntry
        />
        {/*
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Confirm_Current_Pass.Repeat_New_Pass")}
          secureTextEntry
          onChangeText={(newtext) => setUserNewPassword2(newtext)}
          defaultValue={userNewPassword2}
        />
*/}
      </View>
      <Separator2 />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (
              validation.checkTextInputConfirmCurrentPassNotEmpty(
                userOldPassword,
                userNewPassword,
                userNewPassword2
              )
            ) {
              if (checkPassword(password, password2)) {
                (async () => {
                  if (
                    await createPutPasswordChange(
                      userOldPassword,
                      userNewPassword
                    )
                  )
                    navigation.navigate("Profile");
                })();
              }
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Confirm_Current_Pass.Continue_Button")}
          </Text>
        </Button>
      </View>
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
    marginTop: Constants.statusBarHeight * 0,
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
    marginVertical: 11,
  },
  separator2: {
    marginVertical: 5,
  },
  separator3: {
    marginVertical: 60,
  },
});
