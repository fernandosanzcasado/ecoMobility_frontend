import React, { useState, useEffect, useRef } from "react";
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

import LottieView from "lottie-react-native";
import socketService from "../../helpers/SocketService";

var chats = [];

export default function MessagesScreen() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [chatList, setChatList] = useState([]);
  const [animation, setAnimation] = useState(true);

  const submitChatMessage = () => {
    if (animation) setAnimation(false);
    if (!message) return;
    chats = [{ msg: message, sentMsg: true }, ...chats];
    setChatList([...chats]);
    socketService.emit("front_back", message);
    setMessage("");
  };

  useEffect(() => {
    console.log("Entra en messageReceived effect con : " + messageReceived);
    if (!messageReceived) return;
    chats = [{ msg: messageReceived, respuesta: true }, ...chats];
    console.log(chats);
    setChatList([...chats]);
    // console.log(messageReceived);
  }, [messageReceived]);

  useEffect(() => {
    socketService.on("front_back", (data) => {
      console.log(data);
      setMessageReceived(data);
    });

    console.log("Effect []");
  }, []);

  return (
    <View>
      {animation && Object.keys(chats).length === 0 && (
        <View style={styles.animcontainer}>
          <LottieView
            source={require("../../../assets/animation/chatanim.json")}
            autoPlay
            style={styles.animation}
          />
          <Text style={styles.text}>
            Escriu un missatge per establir una conversació...
          </Text>
        </View>
      )}
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
  animation: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  animcontainer: {
    position: "absolute",
    alignSelf: "center",
  },
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
  text: {
    fontSize: 16,
    alignSelf: "center",
  },
});
