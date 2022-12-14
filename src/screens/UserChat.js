import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import io from "socket.io-client";

export default function UserChat() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    setSocket(io("http://192.168.43.233:3000"));
  }, []);

  const submitChatMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.chatview}
        value={message}
        onSubmitEditing={() => submitChatMessage()}
        onChangeText={(chatMessage) => {
          setMessage(chatMessage);
        }}
      />
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
});
