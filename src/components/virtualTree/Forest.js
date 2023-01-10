import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Constants from "expo-constants";

import Tree from "./Tree";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

/*
0-> arbusto1
1-> arbusto2
2-> pi
3-> tresarbres
4-> arbre redó
*/

const positions = [
  { positionx: windowHeight / 5, positiony: windowWidth / 4 },
  { positionx: windowHeight / 4.5, positiony: windowWidth / 3 },
  { positionx: windowHeight / 5, positiony: windowWidth / 2 },
  { positionx: windowHeight / 5, positiony: windowWidth / 2.5 },
  { positionx: windowHeight / 6, positiony: windowWidth / 9 },
  { positionx: windowHeight / 7, positiony: windowWidth / 5 },
  { positionx: windowHeight / 6, positiony: windowWidth / 4 },
  { positionx: windowHeight / 5.5, positiony: windowWidth / 3 },
  { positionx: windowHeight / 4, positiony: windowWidth / 2 },
  { positionx: windowHeight / 5, positiony: windowWidth / 1.5 },
  { positionx: windowHeight / 6, positiony: windowWidth / 1.5 },
  { positionx: windowHeight / 7, positiony: windowWidth / 1.65 },
  { positionx: windowHeight / 7, positiony: windowWidth / 2.25 },
  { positionx: windowHeight / 7, positiony: windowWidth / 3 },
  { positionx: windowHeight / 9, positiony: windowWidth / 4 },
  { positionx: windowHeight / 9, positiony: windowWidth / 4 },
  { positionx: windowHeight / 11, positiony: windowWidth / 3 },
  { positionx: windowHeight / 9, positiony: windowWidth / 2 },
  { positionx: windowHeight / 9, positiony: windowWidth / 1.5 },
  { positionx: windowHeight / 10, positiony: windowWidth / 1.75 },
  { positionx: windowHeight / 6, positiony: windowWidth / 1.9 },
  { positionx: windowHeight / 5, positiony: windowWidth / 1.5 },
  { positionx: windowHeight / 6, positiony: windowWidth / 1.25 },
  { positionx: windowHeight / 4.5, positiony: windowWidth / 1.75 },
  { positionx: windowHeight / 12, positiony: windowWidth / 2.25 },
];

const treetypes = [
  { arbol: require("../../../assets/images/Forest/arbusto1.png") },
  { arbol: require("../../../assets/images/Forest/4arbustos.png") },
  { arbol: require("../../../assets/images/Forest/aveto.png") },
  { arbol: require("../../../assets/images/Forest/tres_arbres.png") },
  { arbol: require("../../../assets/images/Forest/arbol_redondo.png") },
];

export default function Forest({ nArbres }) {
  return (
    <View>
      <Tree tree={treetypes[0].arbol} position={positions[0]} />
      <Image
        source={require("../../../assets/images/Forest/ground.png")}
        style={styles.ground}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ground: {
    marginVertical: Constants.statusBarHeight,
    height: windowHeight / 2.7,
    width: windowWidth,
  },
});
