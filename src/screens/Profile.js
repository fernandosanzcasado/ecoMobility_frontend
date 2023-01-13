import React, {
  Component,
  useTransition,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Button, Switch } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import {
  createPostLogout,
  createGetUserData,
  createGetUserProfileImage,
} from "../helpers/Axios.helper";
import "../../i18n.js";

var buttonState = false;

function Profile({ navigation }) {
  const [culturalEvents, setCulturalEvents] = useState(false);
  const [userName, setUserName] = useState("");
  const [userProfileImage, setUserProfileImage] = useState("");
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const changeCulturalEvents = async (value) => {
    setCulturalEvents(value);
    try {
      await AsyncStorage.setItem("@showCulturalEvents", value.toString());
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem("@showCulturalEvents");
          if (value !== null) {
            setCulturalEvents(value === "true");
          }
        } catch (e) {
          console.log(e);
        }
      };
      getData();
    }, [])
  );

  useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      let userDTO = [];
      (async () => {
        userDTO = await createGetUserData();
        if (userDTO.length == 3) {
          setUserName(userDTO[0]);
        }
      })();
      let image;
      (async () => {
        image = await createGetUserProfileImage();
        setUserProfileImage(image);
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
            source={userProfileImage ? { uri: userProfileImage } : null}
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
        <TouchableOpacity
          style={styles.separationViews}
          onPress={() => {
            navigation.navigate("VirtualTree");
          }}
        >
          <Icon
            name="tree"
            color={"#206D17"}
            size={36}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.My_Forest")} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.separationViews}
          onPress={() => {
            navigation.navigate("UserChat");
          }}
        >
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Achievements");
          }}
          style={styles.separationViews}
        >
          <Icon
            name="trophy"
            color={"#E8C711"}
            size={28}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.Achievements")} </Text>
        </TouchableOpacity>
        <View style={styles.separationViews}>
          <Icon
            name="calendar-day"
            color={"#8d26d1"}
            size={28}
            style={styles.icons}
          ></Icon>
          <Text style={styles.smallText}> {t("Profile.Cultural_Events")} </Text>
          <Switch
            color="#8d26d1"
            value={culturalEvents}
            onValueChange={changeCulturalEvents}
            style={{
              alignSelf: "center",
              justifyContent: "center",
              marginTop: Constants.statusBarHeight * 1.25,
            }}
          />
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
          <Button
            height={40}
            buttonColor={"#27CF10"}
            mode="contained"
            onPress={() => {
              (async () => {
                if (await createPostLogout()) navigation.navigate("Login");
              })();
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
              {t("Profile.Logout")}
            </Text>
          </Button>
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
    paddingTop: Constants.statusBarHeight + 15,
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    fontColor: "#0000",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    paddingTop: Constants.statusBarHeight * 2.2,
    fontColor: "#FFFFFF",
  },
  separationViews: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
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
    marginLeft: Constants.statusBarHeight * 0.5,
    marginRight: Constants.statusBarHeight * 0.35,
    height: Constants.statusBarHeight * 1.85,
    width: Constants.statusBarHeight * 1.85,
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
