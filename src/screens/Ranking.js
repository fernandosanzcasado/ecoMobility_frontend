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
import { useTranslation } from "react-i18next";
import { Card, Button } from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "@env";
import Toolbar from "../components/ecomobility/Toolbar";
import Icon from "react-native-vector-icons/FontAwesome5";

import { createGetRanking } from "../helpers/Axios.helper";

export default function Ranking({ navigation }) {
  const [ranking, setRanking] = useState("");

  useEffect(() => {
    const chargeView = navigation.addListener("focus", () => {
      let userRanking = [];
      (async () => {
        userRanking = await createGetRanking();
        setRanking(userRanking);
      })();
    });
    return chargeView;
  }, [navigation]);
  console.log("h" + ranking);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar navigation={navigation} />

      <View style={styles.topContainer}>
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
      <ScrollView>
        <List
          style={{ backgroundColor: "#A19A9A" }}
          data={ranking}
          renderItem={({ item }) => (
            <View style={styles.separador}>
              <Card elevation={1} style={{ flexGrow: 1 }}>
                <Card.Content style={{ display: "flex", flexDirection: "row" }}>
                  <Text numberOfLines={1} style={{ alignSelf: "center" }}>
                    {item.ecoPoints}
                  </Text>
                  <Text numberOfLines={1} style={{ alignSelf: "center" }}>
                    {item.surnames}
                  </Text>
                  <Text numberOfLines={1} style={{ alignSelf: "center" }}>
                    {item.name}
                  </Text>
                </Card.Content>
              </Card>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </SafeAreaView>
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
    height: Constants.statusBarHeight * 2,
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    marginLeft: Constants.statusBarHeight * 2.2,
    marginTop: Constants.statusBarHeight,
  },
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#FFFFFF",
  },
});
