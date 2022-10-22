import React, { Component, useTransition } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";

import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";

import "../../i18n.js";

function Profile({ navigation }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
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
          <Text style={styles.headerText}>
            {" "}
            {t("Profile_Screen.User_Name")}{" "}
          </Text>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Icon
              name="pen"
              color={"#00000"}
              size={28}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text style={styles.smallText}> {t("Edit_Profile")} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="calendar-alt"
              color={"#0E7CE4"}
              size={31}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> {t("My_Calendar")} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="tree"
              color={"#206D17"}
              size={36}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> {t("My_Forest")} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="headphones-alt"
              color={"#000000"}
              size={30}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> {t("Technical_Assistance")} </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="trophy"
              color={"#E8C711"}
              size={28}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> {t("Trophys")} </Text>
          </TouchableOpacity>
        </View>
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
          <Button title="Logout" color="#27CF10" />
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
    marginLeft: Constants.statusBarHeight,
  },
  flagsView: {
    paddingTop: Constants.statusBarHeight * 1.75,
    paddingLeft: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 1.5,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
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
