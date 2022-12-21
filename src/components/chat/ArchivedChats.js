import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Card } from "react-native-paper";
import Animated, { useAnimatedGestureHandler } from "react-native-reanimated";

const chat1 = [
  { msg: "hola", sentmsg: true, respuesta: false },
  {
    msg: "hola que tal wacho",
    sentmsg: false,
    respuesta: true,
  },
];

export default function ArchivedChats() {
  return (
    <View>
      <Card elevation={5} style={styles.chats}>
        <Card.Title
          title="CHAT EJEMPLO 1"
          subtitle="Este es un exemple de chat1"
        />
        {/* <Card.Cover source={{}} /> */}
        <Card.Content>
          <FlatList></FlatList>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  chats: {
    width: 350,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
});
