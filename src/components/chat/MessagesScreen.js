import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import Message from "./Message";
import io from "socket.io-client";
import Constants from "expo-constants";

var chats = [];

export default function MessagesScreen() {
  const [primer, Setprimer] = useState(true);
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [connected, setConnected] = useState(false);
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    if (!connected) {
      setSocket(io("http://192.168.43.233:3000"));
      setConnected(true);
    }
  }, []);

  const submitChatMessage = () => {
    chats = [...chats, { msg: message, sentMsg: true }];
    setChatList([...chats].reverse());
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
    if (primer) Setprimer(false);
    else {
      console.log("RECIBIDO MI COMPA!!!" + messageReceived);
      chats = [...chats, { msg: messageReceived, respuesta: true }];
      setChatList([...chats].reverse());
      console.log(messageReceived);
    }
  }, [messageReceived]);

  return (
    <View>
      <FlatList
        style={{ height: "90%", bottom: "20%" }}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({ item }) => (
          <Message
            msg={item.msg}
            sentMsg={item.sentMsg}
            respuesta={item.respuesta}
          />
        )}
      />
      <View style={styles.messagecontainer}>
        <TextInput
          style={styles.message}
          value={message}
          placeholder=" Escriu aquí..."
          onSubmitEditing={() => submitChatMessage()}
          onChangeText={(chatMessage) => {
            setMessage(chatMessage);
          }}
        />
        <Button
          style={styles.sendbutton}
          onPress={() => {
            submitChatMessage();
          }}
          buttonColor={message ? "#61AE19" : "grey"}
          textColor={"#FFFFFF"}
        >
          Send
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#F5FCFF",
    //marginVertical: 50,
  },
  message: {
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 6,
    width: "80%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  messagecontainer: {
    flexDirection: "row",
    marginHorizontal: 5,
    bottom: Constants.statusBarHeight * 2,
  },
  sendbutton: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});
