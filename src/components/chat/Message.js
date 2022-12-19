import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function Message({ msg, sentMsg }) {
  return (
    <View>
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
});
