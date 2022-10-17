import React, { Component } from "react";
import Constants from "expo-constants";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export default function EditProfile({ navigation }) {
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
            Editar perfil{" "}
          </Text>
          <Text
            style={{
              fontSize: 25,
              // fontFamily: "Comfortaa",
              paddingTop: 15,
              fontColor: "#FFFFFF",
            }}
          >
            {" "}
            User name{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingTop: Constants.statusBarHeight + 15,
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            Canviar username{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              borderWidth: 1,
              paddingLeft: Constants.statusBarHeight,
            }}
            placeholder="Usernarme"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            Canviar correu electrònic{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              paddingLeft: Constants.statusBarHeight,
              borderWidth: 1,
            }}
            placeholder="Correu"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight + Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            Canviar contrasenya{" "}
          </Text>
          <TextInput
            style={{
              height: Constants.statusBarHeight,
              margin: Constants.statusBarHeight,
              paddingLeft: Constants.statusBarHeight,
              borderWidth: 1,
            }}
            placeholder="Password"
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 15,
              // fontFamily: "Comfortaa",
              paddingRight: Constants.statusBarHeight,
              paddingLeft:
                Constants.statusBarHeight +
                Constants.statusBarHeight +
                Constants.statusBarHeight,
              fontColor: "#0000",
            }}
          >
            {" "}
            Donar-se de baixa{" "}
          </Text>
        </View>
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
