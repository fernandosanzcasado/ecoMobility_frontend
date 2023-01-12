import React, { Component, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-paper";
import { Hideo, Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import FormData from "form-data";
import axios from "axios";
import { useTranslation } from "react-i18next";

import {
  createPutUser,
  createDeleteUser,
  createGetUserData,
  createGetUserProfileImage,
  createPostUploadPicture,
} from "../helpers/Axios.helper";
import "../../i18n.js";
import { errorControlRegister } from "../helpers/AccountRegister.helper";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

const checkUser = (user) => {
  if (user.length <= 3 || user.length >= 15) {
    errorControlRegister(3);
    return false;
  } else {
    return true;
  }
};

const checkEmail = (email) => {
  if (email.Length > 0) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      errorControlRegister(1);
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
  const [userProfileImage, setUserProfileImage] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [pickedImagePath, setPickedImagePath] = useState("");

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      let userDTO = [];
      (async () => {
        userDTO = await createGetUserData();
        if (userDTO.length == 3) {
          setUserName(userDTO[0]);
          setUserSurname(userDTO[1]);
          setUserEmail(userDTO[2]);
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

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    // Explore the result
    //console.log(result);
    if (!result.cancelled) {
      setUserProfileImage(result.uri);
      //console.log(result.uri);
    }
  };

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    console.log("***************************************************");
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
      º;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
    });
    // Explore the result
    console.log("El archivo  es : " + result.assetId);
    console.log("El archivo  es : " + result.base64);
    console.log("El archivo  es : " + result.fileName);
    console.log("El archivo  es : " + result.width);
    console.log("El archivo  es : " + result.height);
    console.log("El archivo  es : " + result.exif);
    console.log("El archivo  es : " + result.type);
    let nameImage = result.uri.slice(result.uri.length - 41, result.uri.length);
    console.log("El nombre del archivo es : " + nameImage);
    if (!result.cancelled) {
      setUserProfileImage(result.uri);
      const fd = new FormData();
      fd.append("profileImage", userProfileImage);
      URL = "http://15.188.52.76:3000/api/v2/users/me/uploadProfileImag";
      await axios
        .put(URL, fd)
        .then((response) => {
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log(error);
        });
      /*
      (async () => {
        await createPostUploadPicture(fd);
      })();*/
    }
  };

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
        {
          text: "OK",
          onPress: () => {
            (async () => {
              if (await createDeleteUser()) navigation.navigate("Login");
            })();
          },
        },
      ]
    );

  return (
    <View style={styles.initialView}>
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
            source={{ uri: userProfileImage }}
            style={styles.picture}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.headerText}> {userName} </Text>
      </View>
      <View style={styles.textInput}>
        <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
          {t("Edit_Profile.User_Name")}
        </Text>
        <Separator2 />
        <Fumi
          label={userName}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserNewName(newtext)}
          defaultValue={userName}
        />
        {/*}
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={userName}
          onChangeText={(newtext) => setUserName(newtext)}
          defaultValue={userName}
        />
        */}
      </View>
      <View style={styles.textInput}>
        <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
          {t("Edit_Profile.Surnames")}
        </Text>
        <Separator2 />
        <Fumi
          label={userSurname}
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          activeColor={"#27CF10"}
          iconSize={20}
          iconWidth={40}
          inputPadding={16}
          onChangeText={(newtext) => setUserNewSurname(newtext)}
          defaultValue={userNewSurname}
        />
        {/*
        <Hideo
          iconClass={FontAwesomeIcon}
          iconName={"user"}
          iconColor={"white"}
          // this is used as backgroundColor of icon container view.
          iconBackgroundColor={"#27CF10"}
          inputStyle={{ color: "#464949" }}
          placeholder={userSurname}
          onChangeText={(newtext) => setUserNewSurname(newtext)}
          defaultValue={userNewSurname}
        />
      */}
      </View>
      <Separator />
      <View style={styles.buttonView}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            if (checkUser(userNewName)) {
              (async () => {
                if (await createPutUser(userNewName, userNewSurname))
                  navigation.navigate("Profile");
              })();
            }
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Edit_Profile.Save_Changes")}
          </Text>
        </Button>
      </View>
      <View style={styles.textInput}>
        <Text style={{ color: "#000000", fontSize: 15, fontWeight: "bold" }}>
          {t("Edit_Profile.Chane_Profile_Picture")}
        </Text>
        <View style={styles.buttonViewImage}>
          <Button
            height={40}
            buttonColor={"#27CF10"}
            mode="contained"
            onPress={() => {
              showImagePicker();
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
              {t("Edit_Profile.Upload_Picture")}
            </Text>
          </Button>
          <Separator2 />
          <Button
            height={40}
            buttonColor={"#27CF10"}
            mode="contained"
            onPress={() => {
              openCamera();
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}
            >
              {t("Edit_Profile.Take_Picture")}
            </Text>
          </Button>
        </View>
      </View>
      <Separator />
      <Separator />
      <View style={styles.buttonViewPass}>
        <Button
          height={40}
          buttonColor={"#27CF10"}
          mode="contained"
          onPress={() => {
            navigation.navigate("ConfirmCurrentPass");
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Edit_Profile.Change_Password")}
          </Text>
        </Button>
      </View>
      <View style={styles.buttonViewPass}>
        <Button
          height={40}
          buttonColor={"#ff0000"}
          mode="contained"
          onPress={() => {
            createTwoButtonAlert();
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: 18, fontWeight: "bold" }}>
            {t("Edit_Profile.Eliminate_Account")}
          </Text>
        </Button>
      </View>
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
    fontWeight: "bold",
    fontSize: 30,
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
    marginTop: Constants.statusBarHeight * 0.5,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginRight: Constants.statusBarHeight * 0.2,
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
  separationViews: {
    display: "flex",
    flexDirection: "column",
  },
  buttonView: {
    paddingTop: Constants.statusBarHeight * 0,
    paddingLeft: Constants.statusBarHeight * 2.5,
    paddingRight: Constants.statusBarHeight * 2.5,
  },
  buttonViewPass: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 1.7,
    paddingRight: Constants.statusBarHeight * 1.7,
  },
  buttonViewImage: {
    paddingTop: Constants.statusBarHeight * 0.5,
    paddingLeft: Constants.statusBarHeight * 1.7,
    paddingRight: Constants.statusBarHeight * 1.7,
  },
  separator: {
    marginVertical: 10,
  },
  separator2: {
    marginVertical: 5,
  },
  mainBody: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  buttonStyle: {
    backgroundColor: "#307ecc",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#307ecc",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    textAlign: "center",
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
});
