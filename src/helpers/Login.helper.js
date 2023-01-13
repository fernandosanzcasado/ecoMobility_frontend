import { Alert } from "react-native";

export const errorControlLogin = (errorId) => {
  switch (errorId) {
    case 2:
      //Alert.alert(t("Error_Control.Incorrect_Pass"));
      Alert.alert("The password is incorrect");
      break;
    case 7:
      //Alert.alert(t("Error_Control.Login_Ok"));
      //Alert.alert("You have successfully logged in");
      break;
    case 8:
      //Alert.alert(t("Error_Control.Void_Fields"));
      Alert.alert("Debes rellenar todos los campos");
      break;
    default:
      break;
  }
};

export const checkTextInputNotEmpty = (email, password) => {
  if (email === "" || password === "") {
    errorControlLogin(8);
    return false;
  } else {
    errorControlLogin(7);
    return true;
  }
};
