import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function Message({ respuesta, msg, sentMsg }) {
  return (
    <View>
      {respuesta && (
        <View style={styles.respuestaBox}>
          <Avatar.Icon size={40} icon="account-wrench" />
          <Text style={styles.respuesta}>{msg}</Text>
        </View>
      )}
      {sentMsg && (
        <Text style={styles.msgbox}>
          <Text style={styles.msgtext}>{msg}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  msgbox: {
    backgroundColor: "green",
    maxWidth: "70%",
    borderRadius: 10,
    padding: 5,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  msgtext: { color: "#fff", fontSize: 16 },
  respuesta: {
    color: "black",
    fontSize: 16,
    marginRight: 30,
  },
  respuestaBox: {
    backgroundColor: "white",
    maxWidth: "75%",
    borderRadius: 10,
    paddingRight: 10,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "grey",
    flexDirection: "row",
  },
});
