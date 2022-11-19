import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Title, Button, TextInput } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { BASE_URL } from "@env";

export default function MiniTapView({ ID, navigation }) {
  const [est, setEst] = useState([]);

  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v1/estaciones/` + ID
        );
        setEst(res.data);
        console.log(est);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  return (
    <View style={styles.miniview}>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Text style={styles.Title}>{est.ADREÇA}</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="flash" size={Constants.statusBarHeight / 1.75}></Icon>
            <Text>{est.ID}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="car" size={Constants.statusBarHeight / 2}></Icon>
            <Text>COTXE/MOTO</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="plug" size={Constants.statusBarHeight / 2}></Icon>
            <Text>{est.TIPUS_CONNEXIÓ}</Text>
          </View>
        </Card.Content>
        <Card.Actions style={{ flexDirection: "column" }}>
          <Button
            contentStyle={styles.buttonstyle}
            theme={{
              colors: {
                primary: "#FFFFFF",
              },
            }}
            onPress={() => {
              navigation.navigate("SearchBar");
            }}
            labelStyle={{ fontSize: 10 }}
          >
            ANAR-HI
          </Button>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Button
              labelStyle={{ fontSize: Constants.statusBarHeight / 3.5 }}
              theme={{
                colors: {
                  primary: "#518BDF",
                },
              }}
            >
              Más información
            </Button>
            <Button
              labelStyle={{ fontSize: Constants.statusBarHeight / 3.5 }}
              theme={{
                colors: {
                  primary: "#518BDF",
                },
              }}
              style={{ marginRight: 5 }}
            >
              Cancelar
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  miniview: {
    position: "absolute",
    top: "30%",
    left: "25%",
    // backgroundColor: "#FFFFFF",
    // width: 200,
    // height: 100,
    zIndex: 1,
  },
  cardStyle: {
    backgroundColor: "#FFFFFF",
    width: 220,
    height: 180,
    elevation: 5,
  },
  buttonstyle: {
    backgroundColor: "#518BDF",
    height: 30,
    width: 70,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
