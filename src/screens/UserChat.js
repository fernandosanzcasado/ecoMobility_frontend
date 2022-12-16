import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { FAB } from "react-native-paper";

import Chatbanner from "../components/chat/Chatbanner";
import Constants from "expo-constants";
import LottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function UserChat() {
  const [newchat, setNewChat] = useState(false);

  return (
    <View>
      <Swiper>
        <View>
          <Chatbanner />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              marginVertical: windowHeight / 5,
            }}
          >
            <LottieView
              source={require("../../assets/animation/chatanim.json")}
              autoPlay
              style={{ height: 200, width: 200, alignSelf: "center" }}
            />
            <FAB
              icon="plus"
              style={styles.fab}
              onPress={() => console.log("Pressed")}
              label="Start new conversation"
              color="#E6ECE6"
            />
          </View>
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>ADIOS</Text>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    marginVertical: 20,
    marginLeft: windowWidth / 4,
    width: 200,
    backgroundColor: "#208824",
  },
});
