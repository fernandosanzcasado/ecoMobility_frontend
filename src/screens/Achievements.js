import React, { Component, useTransition, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Button } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";

import { createPostLogout, createGetUserData } from "../helpers/Axios.helper";
import "../../i18n.js";

function Profile({ navigation }) {
  const [userName, setUserName] = useState("");
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      let userDTO = [];
      (async () => {
        userDTO = await createGetUserData();
        if (userDTO.length == 3) {
          setUserName(userDTO[0]);
        }
      })();
    });
    return chargeView;
  }, [navigation]);

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
            navigation.navigate();
          }}
          style={styles.separationViews}
        >
          <Image
            source={require("../../assets/images/Archievements/Logro1/0-Routes.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro2/1-Forest.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 2"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro3/2-CO2.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 3"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro4/3-Rate.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 4"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro5/4-Car.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 5"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro6/5-Bike.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 6"} </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.separationViews}>
          <Image
            source={require("../../assets/images/Archievements/Logro7/5(2)-Fav.png")}
            style={styles.picture2}
          ></Image>
          <Text style={styles.smallText}> {"Logro 7"} </Text>
        </TouchableOpacity>
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
    marginTop: Constants.statusBarHeight * 1,
    //paddingTop: Constants.statusBarHeight + 25,
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
  picture: {
    marginTop: Constants.statusBarHeight * 1.75,
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight * 0.5,
    height: Constants.statusBarHeight * 1.5,
    width: Constants.statusBarHeight * 1.5,
    borderRadius: 45,
  },
  picture2: {
    marginTop: Constants.statusBarHeight * 0.5,
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight * 0.5,
    height: Constants.statusBarHeight * 1.65,
    width: Constants.statusBarHeight * 1.65,
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
