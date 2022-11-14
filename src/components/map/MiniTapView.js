import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { Card, Title, Button } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export default function MiniTapView({ ID }) {
  console.log(ID);
  const [est, setEst] = useState([]);
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          "http://13.39.105.250:3000/api/v1/estaciones/coordenadas" + ID
        );
        setEst(res.data);
        //console.log(res.data);
        //console.log(est);
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
          <Title>Estación:</Title>
          <View style={{ flexDirection: "row" }}>
            <Icon name="euro" size={Constants.statusBarHeight / 1.75}></Icon>
            <Text style={{ color: "#000000" }}>HOLA: {est.ID}</Text>
          </View>
          <Icon name="plug" size={Constants.statusBarHeight / 1.75}></Icon>
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
              console.log("hola");
            }}
          >
            ANAR-HI
          </Button>
          <View style={{ flexDirection: "row" }}>
            <Button
              labelStyle={{ fontSize: Constants.statusBarHeight / 2.5 }}
              theme={{
                colors: {
                  primary: "#518BDF",
                },
              }}
            >
              Más información
            </Button>
            <Button
              labelStyle={{ fontSize: Constants.statusBarHeight / 2.5 }}
              theme={{
                colors: {
                  primary: "#518BDF",
                },
              }}
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
    left: "27%",
    // backgroundColor: "#FFFFFF",
    // width: 200,
    // height: 100,
    zIndex: 1,
  },
  cardStyle: {
    backgroundColor: "#FFFFFF",
    width: 200,
    height: 155,
  },
  buttonstyle: {
    backgroundColor: "#518BDF",
  },
});
