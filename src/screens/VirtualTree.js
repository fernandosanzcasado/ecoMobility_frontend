import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Divider, IconButton, ProgressBar } from "react-native-paper";

import HeaderTitle from "../components/ecomobility/HeaderTitle";
import Constants from "expo-constants";
import Forest from "../components/virtualTree/Forest";
import ArrayOfForests from "../components/virtualTree/ArrayOfForests";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ECOPOINTS = 1053;

export default function VirtualTree({ navigation }) {
  const [trees, setTrees] = useState(0);
  const [totalTrees, setTotalTrees] = useState(0);
  const [value, setValue] = useState(0);
  const [ecopoints, setEcoPoints] = useState(0);

  useEffect(() => {
    // ENDPOINT DE MARC
    //obtenerEcopoints;
    let ntrees = ECOPOINTS / 20;
    setTotalTrees(ntrees);
    let progressValue = ntrees - Math.trunc(ntrees);
    let mytrees = [];
    while (ntrees > 25) {
      mytrees = [{ narbres: 25 }, ...mytrees];
      ntrees = ntrees - 25;
    }
    mytrees = [{ narbres: ntrees }, ...mytrees];
    setTrees(mytrees);
    setValue(progressValue);
    setEcoPoints(ECOPOINTS % 20);
  }, []);

  return (
    <View>
      <HeaderTitle name={"My Forest"} navigation={navigation} />
      <Divider bold={true} style={{ backgroundColor: "#FFFFFF" }} />
      <View style={styles.subheader}>
        <Text style={styles.subtitle}>Number of trees saved: {totalTrees}</Text>
        <IconButton
          icon={"forest"}
          size={25}
          iconColor="#548A21"
          style={styles.icon}
        />
      </View>
      <View>
        <ArrayOfForests ntrees={trees} ecopoints={ECOPOINTS} />
        <View style={styles.ecobar}>
          <Text style={styles.ecopoints}>Ecopoints actuales:</Text>
          <View style={styles.barView}>
            <ProgressBar
              animatedValue={value}
              color="#67B221"
              style={styles.bar}
            />
            <Text style={styles.ecopoints}>{ecopoints}/20</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignSelf: "center",
    height: Constants.statusBarHeight / 2,
    marginVertical: Constants.statusBarHeight * 0.5,
    borderRadius: 10,
  },
  barView: {
    width: windowWidth / 2,
    alignSelf: "center",
  },
  ecobar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: Constants.statusBarHeight,
  },
  ecopoints: {
    fontSize: 17,
    fontFamily: "comfortaa",
    marginHorizontal: Constants.statusBarHeight / 2,
    alignSelf: "center",
  },
  icon: {
    backgroundColor: "#FFFFFF",
  },
  subheader: {
    backgroundColor: "#2D803F",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "comfortaa",
    marginVertical: Constants.statusBarHeight / 2,
    color: "#FFFFFF",
  },
});
