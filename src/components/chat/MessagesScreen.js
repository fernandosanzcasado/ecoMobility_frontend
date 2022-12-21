import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Message from "./Message";
import io from "socket.io-client";
import Constants from "expo-constants";

var chats = [];

export default function MessagesScreen({ hidefunc }) {
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
    if (!primer) Setprimer(false);
    else {
      console.log("RECIBIDO MI COMPA!!!" + messageReceived);
      chats = [...chats, { msg: messageReceived, respuesta: true }];
      setChatList([...chats].reverse());
      console.log(messageReceived);
    }
  }, [messageReceived]);

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      hidefunc();
    });

    const hide = Keyboard.addListener("keyboardDidHide", () => {
      hidefunc();
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        style={{
          height: "90%",
        }}
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
          blurOnSubmit={false}
          value={message}
          placeholder=" Escriu aquí..."
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(chatMessage) => {
            setMessage(chatMessage);
          }}
        />
        <TouchableOpacity
          style={[
            styles.sendbutton,
            { backgroundColor: message ? "#61AE19" : "grey" },
          ]}
          disabled={message ? false : true}
          keyboardShouldPersistTaps={"handled"}
          onPress={() => {
            submitChatMessage();
          }}
        >
          <Text style={styles.buttontext}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttontext: {
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#F5FCFF",
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
    marginTop: 5,
  },
  sendbutton: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    textColor: "#FFFFFF",
  },
});
