import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, FAB } from "react-native-paper";
import Animated from "react-native-reanimated";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function MyCalendar({ navigation }) {
  const [items, setItems] = useState({});
  const [newitem, setNew] = useState(false);
  const [delitem, setDel] = useState(false);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Km amb Cotxe " + strTime,
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.Home}>HOME</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2022-10-28"}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: "green",
          agendaDayNumColor: "green",
          agendaKnobColor: "green",
        }}
      />
      <View>
        <FAB
          icon="plus"
          style={[styles.fab, { bottom: Constants.statusBarHeight * 2 }]}
          size="small"
        />
        <FAB
          icon="plus"
          style={[styles.fab, { bottom: Constants.statusBarHeight * 4 }]}
          customSize="small"
        />
      </View>
      <FAB
        icon="plus"
        style={styles.fab}
        color="#FFFFFF"
        animated={true}
        onPress={() => console.log("Pressed")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Home: {
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: Constants.statusBarHeight / 5,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#538BB5",
  },
});
