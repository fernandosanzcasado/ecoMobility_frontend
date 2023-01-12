import React from "react";
import {
  StyleSheet,
  View,
  Alert,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { IconButton } from "react-native-paper";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Tree({ tree, position, message, size = 1 }) {
  return (
    <View style={{ zIndex: 101 }}>
      <TouchableOpacity
        onPress={() => {
          Alert.alert("", message);
        }}
      >
        <Image
          source={tree}
          style={[
            styles.tree,
            { marginLeft: position.positionx, marginTop: position.positiony },
          ]}
        />
      </TouchableOpacity>
      {/* <IconButton
        icon={tree}
        iconColor="#548A21"
        size={35 * size}
        style={[
          styles.tree,
          { marginLeft: position.positionx, marginTop: position.positiony },
        ]}
        onPress={() => {
          Alert.alert({ message });
        }}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  tree: {
    width: Constants.statusBarHeight * 1.25,
    height: Constants.statusBarHeight * 1.25,
    position: "absolute",
    zIndex: 1,
  },
});
