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
import { Hideo } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import * as Font from "expo-font";
import { useTranslation } from "react-i18next";

import { createPostRecoverMail } from "../helpers/Axios.helper";
import { checkEmailInputNotEmpty } from "../helpers/AccountRegister.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;
const Separator3 = () => <View style={styles.separator3} />;

const useValidation = () => {
  return { checkEmailInputNotEmpty };
};

export default function PassRecoverMail({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
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
      <View style={styles.separationViews}>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <View style={styles.textInput}>
        <Text>{t("Pass_Recover_Mail.Write_Email")}</Text>
        <Separator2 />
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"envelope"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={t("Pass_Recover_Mail.Email")}
          onChangeText={(newtext) => setUserEmail(newtext)}
          defaultValue={userEmail}
        />
      </View>
      <Separator />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (validation.checkEmailInputNotEmpty(userEmail)) {
              (async () => {
                if (await createPostRecoverMail(userEmail))
                  navigation.navigate("PassRecoverCodeConfirm");
              })();
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Pass_Recover_Mail.Send_Button")}
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
  buttonSearch: {
    orderRadius: 30,
  },
  buttonBack: {
    paddingTop: Constants.statusBarHeight * 5,
    paddingLeft: Constants.statusBarHeight * 0.3,
  },
  separator: {
    marginVertical: 11,
  },
  separator2: {
    marginVertical: 5,
  },
  separator3: {
    marginVertical: 70,
  },
});
