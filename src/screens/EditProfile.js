import React, { Component, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import axios from "axios";

import "../../i18n.js";

const editProfileURL = "http://13.39.20.131:3000/api/v1/users/me/updateInfo";
const userDataURL = "http://13.39.20.131:3000/api/v1/users/me/getInfo";
const userDeleteURL = "http://13.39.20.131:3000/api/v1/users/me/deleteUser";

const errorControl = (errorId) => {
  switch (errorId) {
    case 1:
      alert("El correo electrónico introducido no es válido");
      break;
    case 2:
      alert("El nombre de usuario debe contener entre 3 y 15 carácteres");
      break;
    case 3:
      alert("El nombre de usuario ya se encuentra en uso");
      break;
    case 6:
      alert("Tu cambios se han guardado satisfactoriamente");
      break;
    default:
      break;
  }
};
const checkUser = (user) => {
  if (user.length <= 3 || user.length >= 15) {
    errorControl(2);
    return false;
  } else {
    return true;
  }
};

const checkEmail = (email) => {
  if (email.Length > 0) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      errorControl(1);
      return false;
    }
  } else {
    return true;
  }
};

export default function EditProfile({ navigation }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userNewName, setUserNewName] = useState("");
  const [userNewSurname, setUserNewSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      createGetUserData();
    });
    return chargeView;
  }, [navigation]);

  async function createGetUserData() {
    axios
      .get(userDataURL, {}, { withCredentials: true })
      .then(function (response) {
        setUserName(response.data.name);
        setUserSurname(response.data.surnames);
        setUserEmail(response.data.email);
      })
      .catch(function (error) {
        console.log("El error es " + error.response.data.message);
        errorControl(2);
      });
  }

  async function createPutUser() {
    axios
      .put(
        editProfileURL,
        {
          name: userNewName,
          surnames: userNewSurname,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        navigation.navigate("Profile");
      })
      .catch(function (error) {
        console.log(error);
        errorControl(2);
      });
  }

  async function createDeleteUser() {
    axios
      .delete(userDeleteURL, {}, { withCredentials: true })
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

  const createTwoButtonAlert = () =>
    Alert.alert(
      t("Edit_Profile.Eliminate_AccountAdvice"),
      t("Edit_Profile.Eliminate_AccountAsk"),
      [
        {
          text: t("Edit_Profile.Cancel_Button"),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => createDeleteUser() },
      ]
    );

  return (
    <View style={styles.initialView}>
      <ScrollView>
        <View style={styles.topContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrow-left"
              color={"#00000"}
              size={25}
              style={styles.goBack}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/Profile.png")}
              style={styles.picture}
            ></Image>
          </TouchableOpacity>
          <Text style={styles.headerText}> {userName} </Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <Text style={styles.changeUserName}>
            {" "}
            {t("Edit_Profile.Change_Name")}{" "}
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={userName}
            onChangeText={(newText) => setUserNewName(newText)}
            defaultValue={userNewName}
          />
        </View>
        <View>
          <Text style={styles.smallText}>
            {" "}
            {t("Edit_Profile.Change_Surnames")}{" "}
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={userSurname}
            onChangeText={(newtext) => setUserNewSurname(newtext)}
            defaultValue={userNewSurname}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ConfirmCurrentPass");
            }}
          >
            <Text style={styles.smallText}>
              {" "}
              {t("Edit_Profile.Change_Password")}{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <Button
            title={t("Edit_Profile.Save_Changes")}
            color="#27CF10"
            onPress={() => {
              if (checkUser(userNewName)) {
                createPutUser();
              }
            }}
          />
        </View>
        <View>
          <Text style={styles.eliminateAccount}>
            {" "}
            {t("Edit_Profile.Eliminate_Account")}{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              name="window-close"
              color={"#E03614"}
              size={40}
              style={styles.icons}
              onPress={() => {
                createTwoButtonAlert();
              }}
            ></Icon>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#2D803F",
    width: Constants.paddingBottom,
    height: Constants.statusBarHeight * 4,
    display: "flex",
    flexDirection: "row",
  },
  initialView: {
    paddingBottom: Constants.statusBarHeight,
  },
  headerText: {
    fontSize: 25,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight * 2,
    fontColor: "#FFFFFF",
  },
  smallText: {
    fontSize: 20,
    // fontFamily: "Comfortaa",
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    fontColor: "#0000",
  },
  changeUserName: {
    fontSize: 20,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    fontColor: "#0000",
  },
  textInput: {
    height: Constants.statusBarHeight,
    margin: Constants.statusBarHeight,
    borderWidth: 1,
    paddingLeft: Constants.statusBarHeight,
  },
  eliminateAccount: {
    fontSize: 15,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingRight: Constants.statusBarHeight,
    fontColor: "#0000",
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight * 3,
    fontColor: "#0000",
  },
  icons: {
    paddingTop: Constants.statusBarHeight * 0.8,
    paddingLeft: Constants.statusBarHeight * 4,
  },
  picture: {
    marginTop: Constants.statusBarHeight * 1.75,
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight * 0.5,
    height: Constants.statusBarHeight * 1.5,
    width: Constants.statusBarHeight * 1.5,
    borderRadius: 45,
  },
  goBack: {
    paddingLeft: Constants.statusBarHeight * 0.8,
    paddingTop: Constants.statusBarHeight * 1.5,
  },
  separationViews: {
    display: "flex",
    flexDirection: "column",
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
});
