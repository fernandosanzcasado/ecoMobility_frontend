import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Divider, Button, IconButton } from "react-native-paper";
import { Swipeable } from "react-native-gesture-handler";
import Constants from "expo-constants";

import Message from "./Message";

export default function ArchivedChats() {
  const [chats, setChats] = useState([
    {
      chat: "0",
      assumpte: "problema geolocalització",
      conversa: [
        { msg: "Que pasaaaa", sentMsg: true },
        { msg: "Holaaaa", sentMsg: true },
        { msg: "Holaaaa", resposta: true },
      ],
    },
    {
      chat: "1",
      assumpte: "problema estació carrer Aragó",
      conversa: [
        { msg: "Ei mi panardo", sentMsg: true },
        {
          msg: "La estación ha rebentado y han muerto 10 personas",
          sentMsg: true,
        },
        { msg: "Delocos bro 😎😈🤙", resposta: true },
      ],
    },
  ]);
  const [refreshFlatlist, setrefreshFlatlist] = useState(false);

  const DeleteItems = (indexItem) => {
    chats.splice(indexItem, 1);
    setrefreshFlatlist(!refreshFlatlist);
  };

  const CardItemFirst = ({ item }) => {
    const [moreinfo, setmoreInfo] = useState(false);

    const rightSwipe = () => {
      return (
        <View style={styles.deleteBox}>
          <IconButton
            icon="delete-outline"
            iconColor="red"
            size={40}
            onPress={() => {
              DeleteItems(chats.findIndex((obj) => obj.chat == item.chat));
            }}
          />
        </View>
      );
    };

    return (
      <Swipeable renderLeftActions={rightSwipe}>
        <Card
          elevation={5}
          style={styles.chats}
          // onLongPress={() => {
          //   DeleteItems(chats.findIndex((obj) => obj.chat == item.chat));
          // }}
        >
          <Text style={styles.titletext}>
            {"Tiquet de resolució " + item.assumpte}
          </Text>
          <Divider bold="true" />
          <Card.Content>
            <FlatList
              data={item.conversa ? item.conversa : []}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <CardItem item={item} moreinfo={moreinfo} />
              )}
            ></FlatList>
          </Card.Content>
          <Card.Actions>
            <Button
              mode="text"
              onPress={() => {
                setmoreInfo(!moreinfo);
              }}
            >
              {moreinfo ? "Read Less" : "Read More"}
            </Button>
          </Card.Actions>
        </Card>
      </Swipeable>
    );
  };

  const CardItem = ({ item, moreinfo }) => {
    return (
      moreinfo && (
        <Message
          msg={item.msg}
          sentMsg={item.sentMsg}
          respuesta={item.resposta}
        />
      )
    );
  };

  return (
    <View>
      <FlatList
        data={chats}
        keyExtractor={(item, index) => item.chat + index.toString()}
        renderItem={({ item }) => <CardItemFirst item={item} />}
        style={styles.tickets}
        extraData={refreshFlatlist}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  chats: {
    width: 350,
    marginVertical: Constants.statusBarHeight / 2,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
  },
  deleteBox: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  tickets: {
    marginVertical: Constants.statusBarHeight,
  },
  titletext: {
    fontWeight: "600",
    alignSelf: "center",
    marginVertical: Constants.statusBarHeight / 2,
  },
});
