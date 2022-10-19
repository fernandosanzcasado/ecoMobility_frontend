import React, { Component } from "react";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Profile({ navigation }) {
  return (
    <View
      style={{
        paddingBottom: Constants.statusBarHeight,
      }}
    >
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.headerText}> User name </Text>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Icon
              name="pen"
              color={"#00000"}
              size={28}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Text style={styles.smallText}> Editar perfil </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="calendar-alt"
              color={"#0E7CE4"}
              size={31}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> El meu calendari </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="tree"
              color={"#206D17"}
              size={36}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> El meu bosc </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="headphones-alt"
              color={"#000000"}
              size={30}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> Servei Tècnic </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.separationViews}>
          <TouchableOpacity>
            <Icon
              name="trophy"
              color={"#E8C711"}
              size={28}
              style={styles.icons}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.smallText}> Èxits </Text>
          </TouchableOpacity>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    backgroundColor: "#2D803F",
    width: Constants.paddingBottom,
    height: Constants.statusBarHeight * 4,
  },
  smallText: {
    fontSize: 20,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight + 15,
    paddingRight: Constants.statusBarHeight,
    paddingLeft: Constants.statusBarHeight,
    fontColor: "#0000",
  },
  headerText: {
    fontSize: 25,
    // fontFamily: "Comfortaa",
    paddingTop: Constants.statusBarHeight * 2,
    fontColor: "#FFFFFF",
  },
  separationViews: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    paddingTop: Constants.statusBarHeight * 1.25,
    paddingLeft: Constants.statusBarHeight * 1.5,
  },
});
