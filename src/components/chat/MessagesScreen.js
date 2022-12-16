import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import io from "socket.io-client";

//const socket = io.connect("http://192.168.0.104:3000");

export default function MessagesScreen() {
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!connected) {
      setSocket(io("http://192.168.0.104:3000"));
      console.log("hola");
      setConnected(true);
    }
  }, []);

  const submitChatMessage = () => {
    socket.emit("chat message", message);
    setMessage("");
  };

  useEffect(() => {
    if (connected) {
      socket.on("Server response", (data) => {
        setMessageReceived(data);
      });
    }
  }, [socket]);

  useEffect(() => {
    console.log("RECIBIDO MI COMPA!!!" + messageReceived);
  }, [messageReceived]);

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
  },
  chatview: {
    width: 350,
    height: 50,
    borderWidth: 2,
  },
});
