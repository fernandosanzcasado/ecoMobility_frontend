// export const clearText = () => {
//   setEmail("");
//   setPassword("");
// };
import { Alert } from "react-native";
//import { useTranslation } from "react-i18next";

//const { t } = useTranslation();

export const errorControlLogin = (errorId) => {
  switch (errorId) {
    case 2:
      //Alert.alert(t("Error_Control.Incorrect_Pass"));
      Alert.alert("Error_Control.Incorrect_Pass");
      break;
    case 7:
      //Alert.alert(t("Error_Control.Login_Ok"));
      Alert.alert("Error_Control.Login_Ok");
      break;
    case 8:
      //Alert.alert(t("Error_Control.Void_Fields"));
      Alert.alert("Error_Control.Void_Fields");
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
