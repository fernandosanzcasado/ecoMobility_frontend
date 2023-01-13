import React from "react";
import { StyleSheet, View, Image, Dimensions } from "react-native";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";
import "../../../i18n.js";

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
  { positionx: windowWidth * 0.6, positiony: windowHeight * 0.25 },
  { positionx: windowWidth * 0.68, positiony: windowHeight * 0.25 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.6),
    positiony: windowHeight * 0.25,
  },
  { positionx: windowWidth * 0.5, positiony: windowHeight * 0.2 },
  { positionx: windowWidth * 0.55, positiony: windowHeight * 0.1 },
  { positionx: windowWidth * 0.5, positiony: windowHeight * 0.25 },
  { positionx: windowWidth * 0.6, positiony: windowHeight * 0.2 },
  { positionx: windowWidth * 0.7, positiony: windowHeight * 0.2 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.65),
    positiony: windowHeight * 0.15,
  },
  { positionx: windowWidth * 0.8, positiony: windowHeight * 0.2 },
  { positionx: windowWidth * 0.5, positiony: windowHeight * 0.3 },
  { positionx: windowWidth * 0.65, positiony: windowHeight * 0.15 },
  { positionx: windowWidth * 0.5, positiony: windowHeight * 0.15 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.5),
    positiony: windowHeight * 0.15,
  },
  { positionx: windowWidth * 0.57, positiony: windowHeight * 0.15 },
  { positionx: windowWidth * 0.46, positiony: windowHeight * 0.08 },

  {
    positionx: windowWidth * (1 - 0.08 - 0.68),
    positiony: windowHeight * 0.25,
  },
  { positionx: windowWidth * (1 - 0.08 - 0.5), positiony: windowHeight * 0.2 },
  { positionx: windowWidth * (1 - 0.08 - 0.6), positiony: windowHeight * 0.2 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.5),
    positiony: windowHeight * 0.25,
  },
  { positionx: windowWidth * (1 - 0.08 - 0.7), positiony: windowHeight * 0.2 },
  { positionx: windowWidth * (1 - 0.08 - 0.8), positiony: windowHeight * 0.2 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.55),
    positiony: windowHeight * 0.1,
  },
  { positionx: windowWidth * (1 - 0.08 - 0.5), positiony: windowHeight * 0.3 },
  {
    positionx: windowWidth * (1 - 0.08 - 0.57),
    positiony: windowHeight * 0.15,
  },
];

const treetypes = [
  { arbol: require("../../../assets/images/Forest/arbusto1.png") },
  { arbol: require("../../../assets/images/Forest/4arbustos.png") },
  { arbol: require("../../../assets/images/Forest/aveto.png") },
  { arbol: require("../../../assets/images/Forest/tres_arbres.png") },
  { arbol: require("../../../assets/images/Forest/arbol_redondo.png") },
];

function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Forest({ nArbres, ecoPoints = 0 }) {
  const { t, i18n } = useTranslation();
  const currentPercent = nArbres.narbres - Math.trunc(nArbres.narbres);

  let arboles = [];
  for (let i = 0; i < nArbres.narbres; ++i) {
    if (nArbres.narbres !== 25 && i === Math.trunc(nArbres.narbres)) {
      arboles.push(
        <Tree
          key={i}
          tree={treetypes[randomIntBetween(0, 1)].arbol}
          position={positions[i]}
          message={
            t("Forest.Ecopoints_Left1") +
            (20 - (ecoPoints % 20)).toString() +
            t("Forest.Ecopoints_Left2")
          }
          size={0.8}
        />
      );
    } else {
      arboles.push(
        <Tree
          key={i}
          tree={treetypes[randomIntBetween(2, 4)].arbol}
          position={positions[i]}
          message={t(`Forest.Message${randomIntBetween(1, 4)}`)}
          size={1.25}
        />
      );
    }
  }
  return (
    <View style={styles.viewForest}>
      {arboles}
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
    height: windowHeight * 0.45,
    width: windowWidth,
    zIndex: 100,
  },
  viewForest: {
    height: windowHeight / 1.75,
  },
});
