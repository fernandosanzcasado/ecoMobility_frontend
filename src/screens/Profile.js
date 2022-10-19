import React, { Component } from "react";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";

import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View
      style={{
        paddingBottom: Constants.statusBarHeight,
      }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#2D803F",
            width: Constants.paddingBottom,
            height: Constants.statusBarHeight * 4,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              // fontFamily: "Comfortaa",
              paddingTop: Constants.statusBarHeight * 2,
              fontColor: "#FFFFFF",
            }}
          >
            {" "}
            User name{" "}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Icon
              name="pen"
              color={"#00000"}
              size={28}
              style={{
                paddingTop: Constants.statusBarHeight * 1.25,
                paddingLeft: Constants.statusBarHeight * 1.5,
              }}
            ></Icon>
          </TouchableOpacity>
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
                paddingLeft: Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              Editar perfil{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="calendar-alt"
              color={"#0E7CE4"}
              size={31}
              style={{
                paddingTop: Constants.statusBarHeight * 1.25,
                paddingLeft: Constants.statusBarHeight * 1.5,
              }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingLeft: Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              El meu calendari{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="tree"
              color={"#206D17"}
              size={36}
              style={{
                paddingTop: Constants.statusBarHeight * 1.25,
                paddingLeft: Constants.statusBarHeight * 1.5,
              }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingLeft: Constants.statusBarHeight,
                fontColor: "#0000",
              }}
            >
              {" "}
              El meu bosc{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="headphones-alt"
              color={"#000000"}
              size={30}
              style={{
                paddingTop: Constants.statusBarHeight * 1.25,
                paddingLeft: Constants.statusBarHeight * 1.5,
              }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft: Constants.statusBarHeight * 0.9,
                fontColor: "#0000",
              }}
            >
              {" "}
              Servei Tècnic{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity>
            <Icon
              name="trophy"
              color={"#E8C711"}
              size={28}
              style={{
                paddingTop: Constants.statusBarHeight * 1.25,
                paddingLeft: Constants.statusBarHeight * 1.5,
              }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                // fontFamily: "Comfortaa",
                paddingTop: Constants.statusBarHeight + 15,
                paddingRight: Constants.statusBarHeight,
                paddingLeft: Constants.statusBarHeight,
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
  );
}
