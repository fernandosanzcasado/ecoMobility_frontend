import React, { Component, useTransition, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

import { errorControl } from "../helpers/Login.helper";

import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import axios from "axios";

import "../../i18n.js";
const logoutURL = "http://13.39.20.131:3000/api/v1/users/logout";
const userDataURL = "http://13.39.20.131:3000/api/v1/users/";

function Profile({ navigation }) {
  const [userName, setUserName] = useState("");
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      //createGetUserData();
      //setUserName(response.name);
    });
    return chargeView;
  }, [navigation]);

  async function createGetUserData() {
    axios
      .get(userDataURL, {}, { withCredentials: true })
      .then(function (response) {})
      .catch(function (error) {
        console.log("El error es " + error.response.data.message);
        errorControl(2);
      });
  }

  async function createPostLogout() {
    axios
      .post(logoutURL, {}, { withCredentials: true })
      .then(function (response) {
        navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log("El error es " + error.response.data.message);
        errorControl(2);
      });
  }

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
          <Image
            source={require("../../assets/images/Profile.png")}
            style={styles.picture}
          ></Image>
          <Text style={styles.headerText}> {userName} </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
          style={styles.separationViews}
        >
          <Icon
            name="pen"
            color={"#00000"}
            size={28}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.Edit_Profile")} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.separationViews}
          onPress={() => {
            navigation.navigate("MyCalendar");
          }}
        >
          <Icon
            name="calendar-alt"
            color={"#0E7CE4"}
            size={31}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.My_Calendar")} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.separationViews}>
          <Icon
            name="tree"
            color={"#206D17"}
            size={36}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.My_Forest")} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.separationViews}>
          <Icon
            name="headphones-alt"
            color={"#000000"}
            size={30}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}>
            {" "}
            {t("Profile.Technical_Assistance")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.separationViews}>
          <Icon
            name="trophy"
            color={"#E8C711"}
            size={28}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.Trophys")} </Text>
        </TouchableOpacity>
        <View style={styles.flagsView}>
          <TouchableOpacity
            onPress={() => {
              changeLanguage("en");
            }}
          >
            <Image
              source={require("../../assets/images/BanderaInglesa.jpg")}
              style={styles.flags}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeLanguage("cast");
            }}
          >
            <Image
              source={require("../../assets/images/BanderaEspañola.jpg")}
              style={styles.flags}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeLanguage("cat");
            }}
          >
            <Image
              source={require("../../assets/images/BanderaCatalana.jpg")}
              style={styles.flags}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <Button
            title={t("Profile.Logout")}
            color="#27CF10"
            style={styles.button}
            onPress={() => {
              createPostLogout();
            }}
          />
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
  smallText: {
    fontSize: 20,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight + 15,
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    fontColor: "#0000",
  },
  headerText: {
    fontSize: 25,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight * 2,
    fontColor: "#FFFFFF",
  },
  separationViews: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    paddingTop: Constants.statusBarHeight * 1.25,
    paddingLeft: Constants.statusBarHeight * 1.5,
  },
  flags: {
    borderRadius: 60,
    height: Constants.statusBarHeight * 1.25,
    width: Constants.statusBarHeight * 1.25,
    marginLeft: Constants.statusBarHeight / 2,
    marginRight: Constants.statusBarHeight / 2,
  },
  flagsView: {
    paddingTop: Constants.statusBarHeight * 1.75,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  button: {
    borderRadius: 30,
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
  initialView: {
    paddingBottom: Constants.statusBarHeight,
  },
});

export default Profile;
