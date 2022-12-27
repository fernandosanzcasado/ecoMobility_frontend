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
import LottieView from "lottie-react-native";

var chats = [];

export default function MessagesScreen({ hidefunc }) {
  const [primer, Setprimer] = useState(true);
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const [connected, setConnected] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if (!connected) {
      setSocket(io("http://192.168.43.233:3000"));
      setConnected(true);
    }
  }, []);

  const submitChatMessage = () => {
    if (animation) setAnimation(false);
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

  useEffect(() => {
    const show = Keyboard.addListener("keyboardDidShow", () => {
      hidefunc(false);
    });

    const hide = Keyboard.addListener("keyboardDidHide", () => {
      hidefunc(true);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  //console.log(chatList);

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
