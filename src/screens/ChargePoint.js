import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ViewComponent,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ChargePoint({ navigation }) {
  [favourite, setFavourite] = useState(false);

  return (
    <View>
      <SafeAreaView style={styles.capcalera}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: Constants.statusBarHeight / 2,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrow-left"
              size={Constants.statusBarHeight / 1.5}
              color="#FFFFFF"
              style={{ marginLeft: Constants.statusBarHeight }}
            ></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFavourite(!favourite);
            }}
          >
            <Icon
              name={favourite ? "heart" : "heart-o"}
              size={Constants.statusBarHeight / 1.5}
              color={favourite ? "#DF1818" : "#DF1818"}
              style={{ marginRight: Constants.statusBarHeight / 1.5 }}
            ></Icon>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "500",
            alignSelf: "center",
            color: "#FFFFFF",
            marginTop: Constants.statusBarHeight / 1.5,
            marginBottom: Constants.statusBarHeight,
          }}
        >
          Nombre de la estación
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
          />
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <Icon name="euro" size={Constants.statusBarHeight}></Icon>
        <Text
          style={{ alignSelf: "center", marginLeft: Constants.statusBarHeight }}
        >
          PREU ESTACIO
        </Text>
      </View>
      <View style={styles.separador}></View>
      <View style={styles.container}>
        <Icon
          name="plug"
          size={Constants.statusBarHeight}
          color="#2B7F9E"
        ></Icon>
        <Text
          style={{ alignSelf: "center", marginLeft: Constants.statusBarHeight }}
        >
          SUPERCARREGA
        </Text>
      </View>
      <View style={styles.separador}></View>
      <View style={styles.container}>
        <Icon
          name="map-marker"
          size={Constants.statusBarHeight}
          color="#C23E1E"
        ></Icon>
        <Text
          style={{ alignSelf: "center", marginLeft: Constants.statusBarHeight }}
        >
          CARRER ESTACIÓ
        </Text>
      </View>
      <View style={styles.separador}></View>
      <View style={styles.container}>
        <Icon
          name="exclamation-triangle"
          size={Constants.statusBarHeight}
          color="#F0B523"
        ></Icon>
        <Text
          style={{
            alignSelf: "center",
            marginLeft: Constants.statusBarHeight,
          }}
        >
          BOTÒ REPORTAR INCIDENCIA
        </Text>
      </View>
      <View style={styles.separador}></View>
      <View style={styles.buttons}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginTop: Constants.statusBarHeight }}>Check In</Text>
          <Button
            icon="format-list-checks"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#51E15E",
              },
            }}
            contentStyle={{ height: 60, width: 60 }}
            onPress={() => {
              console.log("Check IN");
            }}
          ></Button>
        </View>
        <View
          style={{
            marginTop: Constants.statusBarHeight * 1.5,
            flexDirection: "column",
          }}
        >
          <Text style={{ marginTop: Constants.statusBarHeight }}>Anar-hi</Text>
          <Button
            icon="sign-direction"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#51BAE1",
              },
            }}
            contentStyle={{ height: 60, width: 60 }}
          ></Button>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginTop: Constants.statusBarHeight }}>
            Check Out
          </Text>
          <Button
            icon="playlist-remove"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#E14C27",
              },
            }}
            contentStyle={{ height: 60, width: 80 }}
            onPress={() => {
              console.log("CHECK OUT");
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    height: "35%",
    width: "100%",
    flexDirection: "column",
    marginBottom: Constants.statusBarHeight,
  },
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#565655",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: Constants.statusBarHeight,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight,
  },
});
