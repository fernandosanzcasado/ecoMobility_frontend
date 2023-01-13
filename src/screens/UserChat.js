import React, { useState } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import { FAB } from "react-native-paper";

import LottieView from "lottie-react-native";

import Chatbanner from "../components/chat/Chatbanner";
import MessagesScreen from "../components/chat/MessagesScreen";
import ArchivedChats from "../components/chat/ArchivedChats";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function UserChat({ navigation }) {
  const [newchat, setNewChat] = useState(false);

  return (
    <View>
      <Chatbanner navigation={navigation} />
      <ScrollView
        horizontal
        pagingEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={true}
      >
        <View>
          <View style={{ width: windowWidth }}>
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
                  onPress={() => {
                    console.log("Click new chat");
                    setNewChat(true);
                  }}
                  label={t("Chat.New")}
                  color="#E6ECE6"
                />
              </View>
            )}
            {newchat && <MessagesScreen />}
          </View>
        </View>
        <View style={{ width: windowWidth }}>
          <ArchivedChats />
        </View>
      </ScrollView>
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
