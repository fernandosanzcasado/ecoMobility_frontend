import React from "react";
import { StyleSheet, View, Alert, Dimensions } from "react-native";
import { IconButton } from "react-native-paper";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Tree({ tree, position }) {
  return (
    <View>
      <IconButton
        icon={tree}
        iconColor="#548A21"
        size={35}
        style={[
          styles.tree,
          { marginTop: position.positionx, marginLeft: position.positiony },
        ]}
        onPress={() => {
          Alert.alert(
            "Estado del arbusto",
            "A este árbol le faltan 100kg de cO2 para crecer"
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  tree: {
    height: Constants.statusBarHeight * 1.25,
    width: Constants.statusBarHeight * 1.25,
    position: "absolute",
    zIndex: 1,
  },
});
