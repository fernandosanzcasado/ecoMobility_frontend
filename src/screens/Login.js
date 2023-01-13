import React, { Component, useState, useEffect, useRef } from "react";
import Constants from "expo-constants";
// import * as Notifications from "expo-notifications";
// import * as webBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
// WEB      92135891802-3u3klkbm5l3fb8ptg2cq5grchnb6u5g3.apps.googleusercontent.com
// IOS      92135891802-acbk6thg24620lcf4e3tivgme16jgn34.apps.googleusercontent.com
// Android  92135891802-ljdjcqp876sidpqj9kchrajjumrlk2tj.apps.googleusercontent.com
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
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { useTranslation } from "react-i18next";

import {
  clearText,
  checkTextInputNotEmpty,
  errorControl,
} from "../helpers/Login.helper";
import {
  createPostLogin,
  createPostEnviaNotificacion,
} from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

const useValidation = () => {
  return { checkTextInputNotEmpty };
};

// webBrowser.maybeCompleteAuthSession();

export default function Login({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const validation = useValidation();
  const { t } = useTranslation();

  // const registerForPushNotificationsAsync = async () => {
  //   let token;

  //   if (Constants.isDevice) {
  //     // we check if we have access to the notification permission
  //     const { status: existingStatus } =
  //       await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;

  //     if (existingStatus !== "granted") {
  //       // if we don't have access to it, we ask for it
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       // user does not allow us to access to the notifications
  //       alert("Failed to get push token for push notification!");
  //       return;
  //     }

  //     // obtain the expo token
  //     token = (await Notifications.getExpoPushTokenAsync()).data;

  //     // log the expo token in order to play with it
  //     console.log(token);
  //   } else {
  //     // notifications only work on physcal devices
  //     alert("Must use physical device for Push Notifications");
  //   }

  //   // some android configuration
  //   if (Platform.OS === "android") {
  //     Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }
  //   setUserToken(token);
  //   return token;
  // };

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      clearText();
    });
    return chargeView;
  }, [navigation]);

  const clearText = () => {
    setUserEmail("");
    setUserPassword("");
  };

  const notificationListener = useRef();
  const responseListener = useRef();

  // useEffect(() => {
  //   // Register for push notification
  //   const token = registerForPushNotificationsAsync();
  //   // This listener is fired whenever a notification is received while the app is foregrounded
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       notificationCommonHandler(notification);
  //     });

  //   // This listener is fired whenever a user taps on or interacts with a notification
  //   // (works when app is foregrounded, backgrounded, or killed)
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       notificationCommonHandler(response.notification);
  //       notificationNavigationHandler(response.notification.request.content);
  //     });

  //   // The listeners must be clear on app unmount
  //   return () => {
  //     Notifications.removeNotificationSubscription(notificationListener);
  //     Notifications.removeNotificationSubscription(responseListener);
  //   };
  // }, []);

  const notificationCommonHandler = (notification) => {
    // save the notification to reac-redux store
    console.log("A notification has been received", notification);
  };

  const notificationNavigationHandler = ({ data }) => {
    // navigate to app screen
    console.log("A notification has been touched", data);
  };

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
        <Fumi
          label={t("Login.Email")}
          iconClass={FontAwesomeIcon}
          iconName={"envelope"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserEmail(newtext)}
          defaultValue={userEmail}
        />
        {}
      </View>
      <View style={styles.textInput}>
        <Fumi
          label={t("Login.Password")}
          iconClass={FontAwesomeIcon}
          iconName={"lock"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserPassword(newtext)}
          defaultValue={userPassword}
          secureTextEntry
        />
        {}
      </View>
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            console.log("El token es: " + userToken);
            if (validation.checkTextInputNotEmpty(userEmail, userPassword)) {
              (async () => {
                if (await createPostLogin(userEmail, userPassword, userToken))
                  navigation.navigate("MapScreen");
              })();
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Login.Login_Button")}
          </Text>
        </Button>
      </View>
      <Separator />
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PassRecoverMail");
          }}
        >
          <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
            {t("Login.Forgot_Password")}
          </Text>
        </TouchableOpacity>
      </View>
      <Separator />
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("AccountRegister");
          }}
        >
          <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
            {t("Login.Register_Text")}
          </Text>
        </TouchableOpacity>
      </View>
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
    marginLeft: Constants.statusBarHeight * 2.5,
    marginRight: Constants.statusBarHeight * 1,
  },
  lema: {
    marginTop: Constants.statusBarHeight * 4,
    marginLeft: Constants.statusBarHeight * 3,
    marginRight: Constants.statusBarHeight * 1,
  },
  textInput: {
    marginTop: Constants.statusBarHeight * 1,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginRight: Constants.statusBarHeight * 0.2,
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 0.75,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  button: {
    alignItems: "center",
    right: 5,
    margintop: 2000,
  },
  separator: {
    marginVertical: 10,
  },
  separator2: {
    marginVertical: 5,
  },
});
