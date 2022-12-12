import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import axios from "axios";
import { BASE_URL } from "@env";
import ListOfAttributes from "../components/estaciones/ListOfAttributes";
import Buttons from "../components/estaciones/Buttons";
import CapcaleraEstacio from "../components/estaciones/CapcaleraEstacio";

export default function ChargePoint({ route, navigation }) {
  [favourite, setFavourite] = useState(false);
  const { idStation } = route.params;

  const [est, setEst] = useState({});
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v1/estaciones/${idStation}`
        );
        setEst(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  return (
    <View>
      <CapcaleraEstacio estacion={est.direccion} navigation={navigation} />
      <ListOfAttributes estacion={est} />
      <Buttons />
    </View>
  );
}

const styles = StyleSheet.create({});
