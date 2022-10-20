import React, { Component } from "react";
import Constants from "expo-constants";
import * as Font from "expo-font";

import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

/* let customFonts = {
  Comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
}; */

export default function Profile({ navigation }) {
  /* state = {
    fontsLoaded: false,
  };

  loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  };

  componentDidMount();
  {
    this.loadFontsAsync();
  }

  render();
  {
    if (!this.state.fontsLoaded) {
      return null;
    }*/

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
            User name{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft:
                  Constants.statusBarHeight +
                  Constants.statusBarHeight +
                  Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              Editar perfil{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft:
                  Constants.statusBarHeight +
                  Constants.statusBarHeight +
                  Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              El meu calendari{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft:
                  Constants.statusBarHeight +
                  Constants.statusBarHeight +
                  Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              El meu bosc{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("PasswordRecover");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft:
                  Constants.statusBarHeight +
                  Constants.statusBarHeight +
                  Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              Servei Tècnic{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft:
                  Constants.statusBarHeight +
                  Constants.statusBarHeight +
                  Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              Èxits{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </ScrollView>
    </View>

    /*<TextInput style={styles.tinput} placeholder="Correo electrónico" />
      <TextInput style={styles.tinput} placeholder="Usuario" />
      <TextInput style={styles.tinput} placeholder="Contraseña" />
      <TextInput style={styles.tinput} placeholder="Repite la contraseña" />
      <Button
        style={styles.but}
        title="Regístrate"
        color="#7CFC00"
        onPress={() => Alert.alert("Te has registrado con éxito")}
      /> 
      
          <TouchableOpacity>
            <Image
              style={{
                borderRadius: Constants.statusBarHeight,
              }}
            ></Image>
            <Text>
          </TouchableOpacity> */
  );
  // }
}
