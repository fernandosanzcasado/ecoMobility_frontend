import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Card, Paragraph } from "react-native-paper";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";

import Message from "./Message";

var CjtMessages = [
  [
    { msg: "Que pasaaaa", sentMsg: true },
    { msg: "Holaaaa", sentMsg: true },
    { msg: "Holaaaa", resposta: true },
  ],
];

const chats = [
  {
    chat: "0",
    assumpte: "problema geolocalització",
    conversa: [
      { msg: "Que pasaaaa", sentMsg: true },
      { msg: "Holaaaa", sentMsg: true },
      { msg: "Holaaaa", resposta: true },
    ],
  },
];

const data = [
  { id: "1", title: "Taj Mahal" },
  { id: "2", title: "Torre de Pizza" },
];

export default function ArchivedChats() {
  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={(item, index) => item.chat + index.toString()}
        renderItem={({ item }) => (
          <Card elevation={5} style={styles.chats}>
            <Card.Title
              //EXEMPLE
              subtitle={"Tiquet de resolució " + item.assumpte}
            />
            <Card.Content>
              <FlatList
                // data={item.conversa ? item.conversa : []}
                data={item.conversa}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                  <Message
                    msg={item.msg}
                    sentMsg={item.sentMsg}
                    respuesta={item.resposta}
                  />
                )}
              ></FlatList>
            </Card.Content>
          </Card>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  chats: {
    width: 350,
    height: 500,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
});
