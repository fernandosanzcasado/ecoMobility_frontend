import React, { Component, useState } from "react";
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
import Constants from "expo-constants";
import * as Font from "expo-font";
import { useTranslation } from "react-i18next";

import {
  checkTextInputCodeAndPassNotEmpty,
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
    <SafeAreaView style={styles.container1}>
      <Separator2 />
      <Separator2 />
      <Separator2 />
      <Separator2 />
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
        <Text>{t("Pass_Recover_Code_Confirm.Write_Code")}</Text>
        <TextInput
          style={styles.tinput}
          placeholder={t("Pass_Recover_Code_Confirm.Code")}
          secureTextEntry
          onChangeText={(newText) => setCode(newText)}
          defaultValue={code}
        />
      </View>
      <Separator2 />
      <View>
        <Text>{t("Password_Change.Write_New_Pass")}</Text>
        <TextInput
          style={styles.tinput}
          placeholder={t("Password_Change.New_Password")}
          secureTextEntry
          onChangeText={(newText) => setPassword1(newText)}
          defaultValue={password1}
        />
      </View>
      <View>
        <Text>{t("Password_Change.Write_New_PassAgain")}</Text>
        <TextInput
          style={styles.tinput}
          placeholder={t("Password_Change.Confirm_New_Password")}
          secureTextEntry
          onChangeText={(newText) => setPassword2(newText)}
          defaultValue={password2}
        />
      </View>
      <View style={styles.buttonView}>
        <Button
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (
              validation.checkTextInputCodeAndPassNotEmpty(password1, password2)
            ) {
              if (
                validation.checkPassword(password1, password2)
                //llamada de cambio de pass con el codigo enviaod por mail
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
  CodeButton: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonCode: {
    orderRadius: 30,
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
    marginVertical: 110,
  },
});
