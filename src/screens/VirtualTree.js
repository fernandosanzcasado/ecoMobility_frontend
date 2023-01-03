import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, Alert } from "react-native";
import { Divider, IconButton } from "react-native-paper";
import HeaderTitle from "../components/ecomobility/HeaderTitle";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

/*
0-> arbusto1
1-> arbusto2
2-> pi
3-> tresarbres
4-> arbre redó
*/
const treetypes = [
  { arbol: require("../../assets/images/Forest/arbusto1.png") },
  { arbol: require("../../assets/images/Forest/4arbustos.png") },
  { arbol: require("../../assets/images/Forest/aveto.png") },
  { arbol: require("../../assets/images/Forest/tres_arbres.png") },
  { arbol: require("../../assets/images/Forest/arbol_redondo.png") },
];

export default function VirtualTree() {
  const [trees, setTrees] = useState(5);
  const [usertrees, setUserTrees] = useState([{}, {}, {}, {}]);

  return (
    <View>
      <HeaderTitle name={"My Forest"} />
      <Divider bold={true} style={{ backgroundColor: "#FFFFFF" }} />
      <View style={styles.subheader}>
        <Text style={styles.subtitle}>Number of trees saved: {trees}</Text>
        <IconButton
          icon={"forest"}
          size={25}
          iconColor="#548A21"
          style={styles.icon}
        />
      </View>
      <View>
        <Image
          source={require("../../assets/images/Forest/ground.png")}
          style={styles.ground}
        />

        <IconButton
          icon={treetypes[0].arbol}
          iconColor="#548A21"
          size={35}
          style={styles.tree}
          onPress={() => {
            Alert.alert(
              "Estado del arbusto",
              "A este árbol le faltan 100kg de cO2 para crecer"
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ground: {
    marginVertical: Constants.statusBarHeight,
    height: windowHeight / 2.7,
    width: windowWidth,
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
  tree: {
    height: Constants.statusBarHeight * 1.25,
    width: Constants.statusBarHeight * 1.25,
    position: "absolute",
    marginTop: windowHeight / 5,
    marginLeft: windowWidth / 2,
  },
});
