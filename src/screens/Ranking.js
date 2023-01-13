import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Keyboard,
  SafeAreaView,
  ScrollView,
  List,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createGetRanking } from "../helpers/Axios.helper";

const Separator = () => <View style={styles.separator} />;

export default function Ranking({ navigation }) {
  const [ranking, setRanking] = useState("");
  const [ranking2, setRanking2] = useState("");
  const [ranking3, setRanking3] = useState("");
  const [ranking4, setRanking4] = useState("");
  const [ranking5, setRanking5] = useState("");

  React.useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      let userRanking = [];
      (async () => {
        userRanking = await createGetRanking();
        setRanking(
          userRanking[0].name +
            " " +
            userRanking[0].surnames +
            "      " +
            userRanking[0].ecoPoints
        );
        setRanking2(
          userRanking[1].name +
            " " +
            userRanking[1].surnames +
            "                   " +
            userRanking[1].ecoPoints
        );
        setRanking3(
          userRanking[2].name +
            " " +
            userRanking[2].surnames +
            "                     " +
            userRanking[2].ecoPoints
        );
        setRanking4(
          userRanking[3].name +
            " " +
            userRanking[3].surnames +
            "              " +
            userRanking[3].ecoPoints
        );
        setRanking5(
          userRanking[4].name +
            " " +
            userRanking[4].surnames +
            "                    " +
            userRanking[4].ecoPoints
        );
      })();
    });
    return chargeView;
  }, [navigation]);
  //console.log("h" + ranking);

  return (
    <View style={styles.initialView}>
      <ScrollView>
        <View style={styles.topContainer}>
          <Separator></Separator>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name="arrow-left"
              color={"#00000"}
              size={25}
              style={styles.goBack}
            ></Icon>
          </TouchableOpacity>

          <Text style={styles.headerText}> Ranking </Text>
        </View>
        <View>
          <Text style={styles.rankText}> {ranking}</Text>
        </View>
        <View>
          <Text style={styles.rankText}> {ranking2}</Text>
        </View>
        <View>
          <Text style={styles.rankText}> {ranking3}</Text>
        </View>
        <View>
          <Text style={styles.rankText}> {ranking4}</Text>
        </View>
        <View>
          <Text style={styles.rankText}> {ranking5}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: "#2D803F",
  },
  mainView: {
    aligItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 150,
  },
  topContainer: {
    backgroundColor: "#2D803F",
    width: Constants.paddingBottom,
    height: Constants.statusBarHeight * 3,
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: Constants.statusBarHeight * 2.2,
    marginTop: Constants.statusBarHeight,
  },
  rankText: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: Constants.statusBarHeight * 0.2,
    marginTop: Constants.statusBarHeight,
  },
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#FFFFFF",
  },
  separator: {
    marginVertical: 10,
  },
  goBack: {
    paddingLeft: Constants.statusBarHeight * 0.8,
    paddingTop: Constants.statusBarHeight * 1.5,
  },
});
