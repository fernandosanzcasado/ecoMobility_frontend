import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import { BASE_URL } from "@env";
import Buttons from "../components/estaciones/Buttons";
import CapcaleraEstacio from "../components/estaciones/CapcaleraEstacio";
import { List, Card } from "react-native-paper";
import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome";

import Rating from "../components/estaciones/Rating.js";

export default function BikePoint({ route, navigation }) {
  const { idStation } = route.params;

  const [estacion, setEst] = useState({});
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v2/bicing/${idStation}`,
          { withCredentials: true }
        );
        setEst(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  useEffect(() => {
    console.log(estacion);
  }, [estacion]);

  return (
    <View>
      <View>
        <SafeAreaView style={styles.capcalera}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: Constants.statusBarHeight / 2,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon
                name="arrow-left"
                size={Constants.statusBarHeight / 1.5}
                color="#FFFFFF"
                style={{ marginLeft: Constants.statusBarHeight }}
              ></Icon>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "500",
              alignSelf: "center",
              color: "#FFFFFF",
              marginTop: Constants.statusBarHeight / 1.5,
              marginBottom: Constants.statusBarHeight / 1.5,
            }}
          >
            {estacion?.Street}
          </Text>
          <Rating />
        </SafeAreaView>
      </View>
      <List.Section title="Datos Estacion: ">
        <List.Accordion
          title="Aspectos técnicos"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text style={styles.Atributo}>
                Nombre de bícis disponibles:{" "}
                {estacion?.num_bikes_available ?? "No info"}
              </Text>
              <Text>
                Bícis eléctriques:{" "}
                {estacion?.num_bikes_available_types?.ebike ?? "No info"}
              </Text>
              <Text>
                Bícis mecàniques:{" "}
                {estacion?.num_bikes_available_types?.mechanical ??
                  "No hay información disponible"}
              </Text>
              <Text>Places totals: {estacion?.capacity ?? "No info"}</Text>
              <Text>
                Places disponibles: {estacion?.num_docks_available ?? "No info"}
              </Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Ubicación :"
          left={(props) => <List.Icon {...props} icon="map-marker-radius" />}
        >
          <Card>
            <Card.Content>
              <Text>Carrer: {estacion.Street}</Text>
              <Text>Codi província: {estacion.PostalCode}</Text>
              <Text>
                Longitud y Latitud: {estacion.long} {estacion.lat}{" "}
              </Text>
            </Card.Content>
          </Card>
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    width: "100%",
    flexDirection: "column",
  },
});
