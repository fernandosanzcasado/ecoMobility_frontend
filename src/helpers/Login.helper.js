// export const clearText = () => {
//   setEmail("");
//   setPassword("");
// };
import { Alert } from "react-native";

export const errorControl = (errorId) => {
  switch (errorId) {
    case 7:
      Alert.alert("Has iniciado sesión satisfactoriamente");
      break;
    case 8:
      Alert.alert("Debes rellenar todos los campos");
      break;
    default:
      break;
  }
};

export const checkTextInputNotEmpty = (email, password) => {
  if (email.length == 0 || password.length == 0) {
    errorControl(8);
    return false;
  } else return true;
};
