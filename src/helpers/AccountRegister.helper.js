import { Alert } from "react-native";
//import { useTranslation } from "react-i18next";

export const errorControl = (errorId) => {
  //const { t } = useTranslation();
  switch (errorId) {
    case 1:
      Alert.alert("Error_Control.Invalid_Email");
      //Alert.alert(t("Error_Control.Invalid_Email"));
      break;
    case 2:
      Alert.alert("Error_Control.Registred_Email");
      //Alert.alert(t("Error_Control.Registred_Email"));
      break;
    case 3:
      Alert.alert("Error_Control.Invalid_Size_Name");
      //Alert.alert(t("Error_Control.Invalid_Size_Name"));
      break;
    case 4:
      Alert.alert("Error_Control.Registred_Name");
      //Alert.alert(t("Error_Control.Registred_Name"));
      break;
    case 5:
      Alert.alert("Error_Control.Invalid_Size_Pass");
      //Alert.alert(t("Error_Control.Invalid_Size_Pass"));
      break;
    case 6:
      Alert.alert("Error_Control.Different_Pass");
      //Alert.alert(t("Error_Control.Different_Pass"));
      break;
    case 7:
      Alert.alert("Error_Control.Registred_Ok");
      //Alert.alert(t("Error_Control.Registred_Ok"));
      break;
    case 8:
      Alert.alert("Error_Control.Void_Fields");
      //Alert.alert(t("Error_Control.Void_Fields"));
      break;
    default:
      break;
  }
};

export const checkTextInputNotEmpty = (email, user, password1, password2) => {
  if (
    email.length == 0 ||
    user.length == 0 ||
    password1.length == 0 ||
    password2.length == 0
  ) {
    errorControl(8);
    return false;
  } else return true;
};

export const checkTextInputPassNotEmpty = (password1, password2) => {
  if (password1.length == 0 || password2.length == 0) {
    errorControl(8);
    return false;
  } else return true;
};

export const checkEmail = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    errorControl(1);
    return false;
  } else {
    return true;
  }
};

export const checkUser = (user) => {
  if (user.length <= 3 || user.length >= 15) {
    errorControl(3);
    return false;
  } else {
    return true;
  }
};

export const checkPassword = (password1, password2) => {
  console.log(password1 + " " + password2);
  if (
    checkPasswordRequeriments(password1) &&
    checkPasswordRequeriments(password2)
  ) {
    if (password1 != password2) {
      errorControl(6);
      return false;
    } else {
      errorControl(7);
      return true;
    }
  } else {
    if (password1 != password2) errorControl(6);
    else errorControl(5);
    return false;
  }
};

export const checkPasswordRequeriments = (password1) => {
  if (password1.length < 8) return false;
  else return true;
};
