import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { FAB } from "react-native-paper";

import LottieView from "lottie-react-native";

import Chatbanner from "../components/chat/Chatbanner";
import MessagesScreen from "../components/chat/MessagesScreen";
import ArchivedChats from "../components/chat/ArchivedChats";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function UserChat() {
  const [newchat, setNewChat] = useState(false);
  const [showbuttons, setShowButtons] = useState(true);

  const hideButtons = (value) => {
    setShowButtons(value);
  };

  return (
    <View>
      <Chatbanner />
      <Swiper
        showsPagination={showbuttons}
        keyboardShouldPersistTaps={"handled"}
      >
        <View>
          <View>
            {!newchat && (
              <View style={styles.animation}>
                <LottieView
                  source={require("../../assets/animation/chatanim.json")}
                  autoPlay
                  style={{ height: 200, width: 200, alignSelf: "center" }}
                />
                <FAB
                  icon="plus"
                  style={styles.fab}
                  onPress={() => console.log(setNewChat(true))}
                  label="Start new conversation"
                  color="#E6ECE6"
                />
              </View>
            )}
            {newchat && <MessagesScreen hidefunc={hideButtons} />}
          </View>
        </View>
        <View>
          <ArchivedChats />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    marginTop: windowHeight / 5,
  },
  fab: {
    marginVertical: 20,
    marginLeft: windowWidth / 4,
    width: 200,
    backgroundColor: "#208824",
  },
});
