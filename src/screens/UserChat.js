import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";
import { FAB } from "react-native-paper";

import io from "socket.io-client";
import Chatbanner from "../components/chat/Chatbanner";
import Constants from "expo-constants";
import LottieView from "lottie-react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function UserChat() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  const [newchat, setNewChat] = useState(false);

  useEffect(() => {
    setSocket(io("http://192.168.43.233:3000"));
  }, []);

  const submitChatMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };

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
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#F5FCFF",
    marginVertical: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  chatview: {
    width: 400,
    height: 50,
    borderWidth: 2,
  },
  fab: {
    marginVertical: 20,
    marginLeft: windowWidth / 4,
    width: 200,
    backgroundColor: "#208824",
  },
});

{
  /* <TextInput
          style={styles.chatview}
          value={message}
          onSubmitEditing={() => submitChatMessage()}
          onChangeText={(chatMessage) => {
            setMessage(chatMessage);
          }}
        /> */
}
