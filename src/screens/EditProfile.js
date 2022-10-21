import React, { Component } from "react";
import Constants from "expo-constants";
import "../../i18n.js";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";

export default function EditProfile({ navigation }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <View
      style={{
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#2D803F",
            width: Constants.paddingBottom,
            height: 130,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              // fontFamily: "Comfortaa",
              paddingTop: Constants.statusBarHeight,
              fontColor: "#FFFFFF",
            }}
          >
            {" "}
            {t("Edit_Profile")}{" "}
          </Text>
          <Text
            style={{
              fontSize: 25,
              // fontFamily: "Comfortaa",
              paddingTop: 15,
              fontColor: "#FFFFFF",
            }}
          >
            {" "}
            {t("User_Name")}{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingTop: Constants.statusBarHeight + 15,
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            {t("Change_User_Name")}{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              borderWidth: 1,
              paddingLeft: Constants.statusBarHeight,
            }}
            placeholder="Username"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            {t("Change_Email")}{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              paddingLeft: Constants.statusBarHeight,
              borderWidth: 1,
            }}
            placeholder="Correu"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            {t("Change_Password")}{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              paddingLeft: Constants.statusBarHeight,
              borderWidth: 1,
            }}
            placeholder="Password"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight +
                Constants.statusBarHeight +
                Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            {t("Eliminate_Account")}{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
