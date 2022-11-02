import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, FAB } from "react-native-paper";
import * as Animatable from "react-native-animatable";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

export default function MyCalendar({ navigation }) {
  const [items, setItems] = useState({
    "2022-11-02": [{ name: "test1", kmC: "30", kmB: "2" }],
    "2022-11-03": [{ name: "test2", kmC: "50", kmB: "3" }],
  });

  const [newitem, setNew] = useState(false);
  const [delitem, setDel] = useState(false);
  const [funcs, setFuncs] = useState(false);

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
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

  const newItem = (day, kmsC, kmsB) => {
    const time = day.timestamp + 24 * 60 * 60 * 1000;
    const strTime = timeToString(time);
    items.slice();
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
        // minDate={"2022-10-31"}
        // maxDate={"2022-11-31"}
        pastScrollRange={1}
        futureScrollRange={2}
        //loadItemsForMonth={loadItems}
        renderItem={renderItem}
        // theme={{
        //   agendaDayTextColor: "green",
        //   agendaDayNumColor: "green",
        //   agendaKnobColor: "green",
        // }}
        renderEmptyData={() => {
          return <Text>No hi ha esdeveniments disponibles...</Text>;
        }}
      />
      {funcs && (
        <Animatable.View
          animation="bounceInUp"
          style={{ flexDirection: "row" }}
        >
          <FAB
            icon="minus"
            style={[styles.fab, { bottom: Constants.statusBarHeight * 2 }]}
            small
          />
          <FAB
            icon="plus"
            style={[styles.fab, { bottom: Constants.statusBarHeight * 4 }]}
            small
            onPress={() => setNew(!newitem)}
          />
        </Animatable.View>
      )}
      {newitem && <View></View>}
      <FAB
        icon="plus"
        style={styles.fab}
        color="#FFFFFF"
        animated={true}
        onPress={() => setFuncs(!funcs)}
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
    size: "large",
  },
});
