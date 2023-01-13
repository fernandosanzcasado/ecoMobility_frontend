import React, { Component, useTransition, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";
import "../../i18n.js";

import {
  getLogoRouter,
  getLogoTreedom,
  getLogoCO2,
  getLogoCritic,
  getLogoCarNomad,
  getLogoBikeNomand,
  getLogoFavoritism,
  getNextGoalRouter,
  getNextGoalTreedom,
  getNextGoalCO2,
  getNextGoalCritic,
  getNextGoalCarNomad,
  getNextGoalBikeNomand,
  getNextGoalFavoritism,
} from "../helpers/Achievemnts.helper";
import {
  createGetUserData,
  createGetUserAchievements,
} from "../helpers/Axios.helper";

function Profile({ navigation }) {
  const [userName, setUserName] = useState("");
  const [achievementData1Alarm, setachievementData1Alarm] = useState("");
  const [achievementData2Alarm, setachievementData2Alarm] = useState("");
  const [achievementData3Alarm, setachievementData3Alarm] = useState("");
  const [achievementData4Alarm, setachievementData4Alarm] = useState("");
  const [achievementData5Alarm, setachievementData5Alarm] = useState("");
  const [achievementData6Alarm, setachievementData6Alarm] = useState("");
  const [achievementData7Alarm, setachievementData7Alarm] = useState("");
  const [achievementLogo1, setAchievementLogo1] = useState("");
  const [achievementLogo2, setAchievementLogo2] = useState("");
  const [achievementLogo3, setAchievementLogo3] = useState("");
  const [achievementLogo4, setAchievementLogo4] = useState("");
  const [achievementLogo5, setAchievementLogo5] = useState("");
  const [achievementLogo6, setAchievementLogo6] = useState("");
  const [achievementLogo7, setAchievementLogo7] = useState("");
  const [achievementNextGoal1, setAchievementNextGoal1] = useState("");
  const [achievementNextGoal2, setAchievementNextGoal2] = useState("");
  const [achievementNextGoal3, setAchievementNextGoal3] = useState("");
  const [achievementNextGoal4, setAchievementNextGoal4] = useState("");
  const [achievementNextGoal5, setAchievementNextGoal5] = useState("");
  const [achievementNextGoal6, setAchievementNextGoal6] = useState("");
  const [achievementNextGoal7, setAchievementNextGoal7] = useState("");
  let achievementData1;
  let achievementData2;
  let achievementData3;
  let achievementData4;
  let achievementData5;
  let achievementData6;
  let achievementData7;
  /*
  let achievementLogo1;
  let achievementLogo2;
  let achievementLogo3;
  let achievementLogo4;
  let achievementLogo5;
  let achievementLogo6;
  let achievementLogo7;
  */
  const { t, i18n } = useTranslation();
  1;
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
      let achievementsDTO = [];
      (async () => {
        achievementsDTO = await createGetUserAchievements();

        setAchievementsData(achievementsDTO);
        setAchievementsLogo();
        setAchievementsNextGoal();
      })();
    });
    return chargeView;
  }, [navigation]);

  const errorControlLogin = (achievementId) => {};

  const setAchievementsData = (achievementsDTO) => {
    achievementData1 = achievementsDTO[0][0].value;
    setachievementData1Alarm(achievementData1);
    achievementData2 = achievementsDTO[0][1].value;
    setachievementData2Alarm(achievementData2);
    achievementData3 = achievementsDTO[0][2].value;
    setachievementData3Alarm(achievementData3);
    achievementData4 = achievementsDTO[0][3].value;
    setachievementData4Alarm(achievementData4);
    achievementData5 = achievementsDTO[0][4].value;
    setachievementData5Alarm(achievementData5);
    achievementData6 = achievementsDTO[0][5].value;
    setachievementData6Alarm(achievementData6);
    achievementData7 = achievementsDTO[0][6].value;
    setachievementData7Alarm(achievementData7);
  };

  const setAchievementsLogo = () => {
    let achievementLogoaux;
    achievementLogoaux = getLogoRouter(achievementData1);
    setAchievementLogo1(achievementLogoaux);
    achievementLogoaux = getLogoTreedom(achievementData2);
    setAchievementLogo2(achievementLogoaux);
    achievementLogoaux = getLogoCO2(achievementData3);
    setAchievementLogo3(achievementLogoaux);
    achievementLogoaux = getLogoCritic(achievementData4);
    setAchievementLogo4(achievementLogoaux);
    achievementLogoaux = getLogoCarNomad(achievementData5);
    setAchievementLogo5(achievementLogoaux);
    achievementLogoaux = getLogoBikeNomand(achievementData6);
    setAchievementLogo6(achievementLogoaux);
    achievementLogoaux = getLogoFavoritism(achievementData7);
    setAchievementLogo7(achievementLogoaux);
  };

  const setAchievementsNextGoal = () => {
    let achievementNextGoalaux;
    achievementNextGoalaux = getNextGoalRouter(achievementData1);
    setAchievementNextGoal1(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalTreedom(achievementData2);
    setAchievementNextGoal2(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalCO2(achievementData3);
    setAchievementNextGoal3(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalCritic(achievementData4);
    setAchievementNextGoal4(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalCarNomad(achievementData5);
    setAchievementNextGoal5(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalBikeNomand(achievementData6);
    setAchievementNextGoal6(achievementNextGoalaux);
    achievementNextGoalaux = getNextGoalFavoritism(achievementData7);
    setAchievementNextGoal7(achievementNextGoalaux);
  };

  const createAchievemen1tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement1") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData1Alarm +
        "/" +
        achievementNextGoal1 +
        " " +
        t("Achievements.Achievement1Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen2tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement2") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData2Alarm +
        "/" +
        achievementNextGoal2 +
        " " +
        t("Achievements.Achievement2Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen3tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement3") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData3Alarm +
        "/" +
        achievementNextGoal3 +
        " " +
        t("Achievements.Achievement3Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen4tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement4") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData4Alarm +
        "/" +
        achievementNextGoal4 +
        " " +
        t("Achievements.Achievement4Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen5tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement5") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData5Alarm +
        "/" +
        achievementNextGoal5 +
        " " +
        t("Achievements.Achievement5Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen6tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement6") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData6Alarm +
        "/" +
        achievementNextGoal6 +
        " " +
        t("Achievements.Achievement6Alert"),
      [
        {
          text: "OK",
        },
      ]
    );

  const createAchievemen7tAlert = () =>
    Alert.alert(
      t("Achievements.Achievement7") + " " + t("Achievements.Progress"),
      t("Achievements.CurrentProgress") +
        " " +
        achievementData7Alarm +
        "/" +
        achievementNextGoal7 +
        " " +
        t("Achievements.Achievement7Alert"),
      [
        {
          text: "OK",
        },
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
          <Image
            source={require("../../assets/images/Profile.png")}
            style={styles.picture}
          ></Image>
          <Text style={styles.headerText}> {userName} </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            createAchievemen1tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo1 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/0-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo1 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/1-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo1 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/2-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo1 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/3-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo1 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/4-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo1 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro1/5-Routes.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement1")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen2tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo2 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/0-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo2 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/1-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo2 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/2-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo2 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/3-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo2 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/4-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo2 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro2/5-Forest.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement2")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen3tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo3 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/0-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo3 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/1-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo3 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/2-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo3 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/3-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo3 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/4-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo3 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro3/5-CO2.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement3")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen4tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo4 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/0-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo4 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/1-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo4 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/2-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo4 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/3-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo4 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/4-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo4 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro4/5-Rate.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement4")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen5tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo5 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/0-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo5 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/1-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo5 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/2-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo5 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/3-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo5 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/4-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo5 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro5/5-Car.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement5")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen6tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo6 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/0-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo6 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/1-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo6 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/2-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo6 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/3-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo6 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/4-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo6 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro6/5-Bike.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement6")}{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            createAchievemen7tAlert();
          }}
          style={styles.separationViews}
        >
          {(() => {
            if (achievementLogo7 == 0) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/0-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo7 == 1) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/1-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo7 == 2) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/2-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo7 == 3) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/3-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo7 == 4) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/4-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            } else if (achievementLogo7 == 5) {
              return (
                <Image
                  source={require("../../assets/images/Archievements/Logro7/5-Fav.png")}
                  style={styles.picture2}
                ></Image>
              );
            }
          })()}
          <Text style={styles.smallText}>
            {" "}
            {t("Achievements.Achievement7")}{" "}
          </Text>
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
    fontWeight: "bold",
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
