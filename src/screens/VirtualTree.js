import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Divider, IconButton, ProgressBar } from "react-native-paper";

import HeaderTitle from "../components/ecomobility/HeaderTitle";
import Constants from "expo-constants";
import Forest from "../components/virtualTree/Forest";
import ArrayOfForests from "../components/virtualTree/ArrayOfForests";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ECOPOINTS = 1020;

export default function VirtualTree() {
  const [trees, setTrees] = useState();

  useEffect(() => {
    //obtenerEcopoints;
    let ntrees = ECOPOINTS / 20;
    let mytrees = [];
    while (ntrees > 25) {
      mytrees = [...mytrees, { narbres: 25 }];
      ntrees = ntrees - 25;
    }
    mytrees = [...mytrees, { narbres: ntrees }];
    setTrees(mytrees);
  }, []);

  return (
    <View>
      <HeaderTitle name={"My Forest"} />
      <Divider bold={true} style={{ backgroundColor: "#FFFFFF" }} />
      <View style={styles.subheader}>
        <Text style={styles.subtitle}>Number of trees saved:</Text>
        <IconButton
          icon={"forest"}
          size={25}
          iconColor="#548A21"
          style={styles.icon}
        />
      </View>
      <View>
        <ArrayOfForests ntrees={trees} />
        {/* <ScrollView
          horizontal
          pagingEnabled
          nestedScrollEnabled
          showsHorizontalScrollIndicator={true}
        >
          {trees.map((arbres) => (
            <Forest nArbres={arbres} />
          ))}
        </ScrollView> */}
        {/* <View style={styles.ecobar}>
          <Text style={styles.ecopoints}>
            Ecopoints necesarios para hacer crecer{"\n"}
          </Text>
          <Text style={styles.ecopoints}>un nuevo árbol:</Text>
          <ProgressBar progress={0.2} color="#67B221" style={styles.bar} />
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    width: windowWidth / 2,
    alignSelf: "center",
    height: Constants.statusBarHeight / 2,
    marginVertical: Constants.statusBarHeight / 2,
    borderRadius: 10,
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
