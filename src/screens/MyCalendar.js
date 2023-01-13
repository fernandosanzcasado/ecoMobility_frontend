import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome5";

import Constants from "expo-constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, FAB } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { BASE_URL } from "@env";
import axios from "axios";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const windowWidth = Dimensions.get("window");

export default function MyCalendar({ navigation }) {
  const [items, setItems] = useState({
    "2022-11-01": [{ name: "Test0", kmC: "20", kmB: "1" }],
    "2022-11-02": [{ name: "Test1", kmC: "30", kmB: "2" }],
    "2022-11-03": [{ name: "Test2", kmC: "50", kmB: "3" }],
  });

  useEffect(() => {
    async function getCalendar() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v2/users/me/getInfo`,
          { withCredentials: true }
        );
        setEstaciones(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCalendar();
  }, []);

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Text>Quilòmetres amb cotxe: {item.kmC}</Text>
              <Text>Quilòmetres amb bici: {item.kmB}</Text>
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
          return (
            <Text
              style={{
                alignSelf: "center",
                paddingTop: Constants.statusBarHeight * 2,
              }}
            >
              No hi ha esdeveniments disponibles...
            </Text>
          );
        }}
        //style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}
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
});
