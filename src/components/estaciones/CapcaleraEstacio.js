import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import Rating from "./Rating";
import axios from "axios";
import { BASE_URL } from "@env";

export default function CapcaleraEstacio({ estacion, estacionId, navigation }) {
  const [favourite, setFavourite] = useState(false);

  async function handleFavourite() {
    console.log("estacion", estacion);
    const oldFav = favourite;
    setFavourite(!favourite);
    if (!favourite) {
      console.log(estacionId);
      let loggg = await axios
        .post(
          `http://${BASE_URL}/api/v2/users/me/addFavouriteStation`,
          { stationId: estacionId.toString() },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
      console.log(loggg);
    } else {
      console.log("REMOVE", estacionId);
      let resLog = await axios
        .delete(
          `http://${BASE_URL}/api/v2/users/me/deleteFavouriteStation`,
          { stationId: estacionId.toString() },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => console.log(error));
      console.log(resLog);
    }
  }

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
              handleFavourite();
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
            marginBottom: Constants.statusBarHeight / 1.5,
          }}
        >
          {estacion}
        </Text>
        <Rating />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    width: "100%",
    flexDirection: "column",
  },
});
