import React, { Component, useState } from "react";
import Constants from "expo-constants";
import * as Font from "expo-font";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Separator = () => <View style={styles.separator} />;
const Separator2 = () => <View style={styles.separator2} />;

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearText = () => {
    setEmail("");
    setPassword("");
  };

  const errorControl = (errorId) => {
    switch (errorId) {
      case 7:
        alert("Has iniciado sesión satisfactoriamente");
        break;
      case 8:
        alert("Debes rellenar todos los campos");
        break;
      default:
        break;
    }
  };

  const checkTextInputNotEmpty = (email, password) => {
    if (email.length == 0 || password.length == 0) {
      errorControl(8);
      return false;
    } else return true;
  };

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      clearText();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return chargeView;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container1}>
      <View>
        <Image
          style={styles.logo}
          source={require("../../assets/images/EcoMobilityIcon2.png")}
        />
      </View>
      <Separator />
      <View>
        <Image
          style={styles.lema}
          source={require("../../assets/images/LetrasLema3.png")}
        />
      </View>
      <Separator2 />
      <Separator2 />
      <Separator2 />
      <View>
        <TextInput
          style={styles.tinput}
          placeholder="Email o Usuario"
          on
          onChangeText={(newtext) => setEmail(newtext)}
          defaultValue={email}
        />
      </View>
      <Separator2 />
      <View>
        <TextInput
          style={styles.tinput}
          placeholder="Contraseña"
          onChangeText={(newtext) => setPassword(newtext)}
          defaultValue={password}
          secureTextEntry
        />
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (checkTextInputNotEmpty(email, password)) {
              errorControl(7);
            } else {
            }
          }}
        >
          <Image
            source={require("../../assets/images/Boton1IniciaSesion.png")}
          />
        </TouchableOpacity>
      </View>
      <Separator />
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("PasswordRecover");
          }}
        >
          <Text> ¿Has olvidado la contraseña?</Text>
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
          <Text> ¿No tienes cuenta? Regístarte</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center",
    paddingTop: 50,
    paddingLeft: 10,
  },
  logo: {
    justifyContent: "center",
    left: 60,
    //padding: 90,
    //width: 260,
    //height: 170,
  },
  lema: {
    justifyContent: "center",
    left: 70,
    //width: 260,
    //height: 170,
  },
  tinput: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  but: {
    flex: 1,
    margin: 20,
    margintop: 22,
  },
  button: {
    alignItems: "center",
    right: 5,
    margintop: 2000,
  },
  separator: {
    marginVertical: 11,
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separator2: {
    marginVertical: 5,
    //borderBottomColor: "#737373",
    //borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
