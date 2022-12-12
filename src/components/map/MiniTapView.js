import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

import { Card, Button } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import OutsidePressHandler from "react-native-outside-press";
import { BASE_URL } from "@env";

const ancho = Dimensions.get("window").width;

const alto = Dimensions.get("window").height;

export default function MiniTapView({
  ID,
  navigation,
  hideFunction,
  startRoute,
}) {
  const [est, setEst] = useState({});
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v1/estaciones/${ID}`
        );
        setEst(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  const handlePressOut = () => {
    hideFunction();
  };

  return (
    <OutsidePressHandler
      onOutsidePress={() => {
        hideFunction();
      }}
      style={styles.miniview}
    >
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Text style={styles.Title}>{est.direccion}</Text>
          <View style={{ flexDirection: "row" }}>
            <Icon name="flash" size={Constants.statusBarHeight / 2.5}></Icon>
            <Text style={styles.text}>
              {est.tipoCorriente != null
                ? est.tipoCorriente
                : `No hay información disponible`}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="car" size={Constants.statusBarHeight / 3}></Icon>
            <Text style={styles.text}>
              {est.tipoVehiculo != null
                ? est.tipoVehiculo
                : "No hay información disponible"}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="plug" size={Constants.statusBarHeight / 3}></Icon>
            <Text style={styles.text}>
              {est.tipoConexion != null
                ? est.tipoConexion
                : `No hay información disponible`}
            </Text>
          </View>
        </Card.Content>
        <Card.Actions style={{ flexDirection: "row" }}>
          <Button
            contentStyle={styles.buttonstyle}
            theme={{
              colors: {
                primary: "#FFFFFF",
              },
            }}
            labelStyle={{ fontSize: 10 }}
            onPress={() => {
              startRoute(est.latitud, est.longitud);
            }}
          >
            ANAR-HI
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              labelStyle={{ fontSize: Constants.statusBarHeight / 3.5 }}
              theme={{
                colors: {
                  primary: "#518BDF",
                },
              }}
              onPress={() => {
                navigation.navigate("ChargePoint", { idStation: ID });
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
              onPress={() => {
                hideFunction();
              }}
            >
              Cancelar
            </Button>
          </View>
        </Card.Actions>
      </Card>
    </OutsidePressHandler>
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
    height: 40,
    width: 90,
  },
  Title: {
    fontWeight: "bold",
    fontSize: 13,
  },
  text: {
    fontSize: 13,
  },
});
