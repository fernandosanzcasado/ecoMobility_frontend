import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState, useCallback } from "react";

import Constants from "expo-constants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import Mapa from "../components/map/Maps";
import Toolbar from "../components/ecomobility/Toolbar";
import NavigationTab from "../components/navigation/NavigationTab";
import { BASE_URL } from "@env";
import paramsList from "../helpers/ParamsMapCall";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen({ style, navigation, route }) {
  const { update } = route?.params || 0;

  async function getEstaciones() {
    try {
      let res = await axios.get(`http://${BASE_URL}/api/v2/estaciones`, {
        params: paramsList.getParams(),
      });
      if (res.status === 200) {
        console.log("DATA CORRECTA ESTACIONES");
        setEstaciones(res.data);
      } else {
        console.log("DATA VACIA ESTACIONES");
        setEstaciones([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCatCulturaEvents() {
    try {
      let res = await axios.get(`http://4.231.36.42:8080/events`, {
        lat: "41.403866",
        long: "2.1743618",
        radius: "1",
      });
      if (res.status === 200) {
        console.log("DATA CORRECTA EVENTOS");
        setCatCulturaEvents(res.data);
      } else {
        console.log("DATA VACIA EVENTOS");
        setCatCulturaEvents([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [estaciones, setEstaciones] = useState();
  const [catCulturaEvents, setCatCulturaEvents] = useState();

  useEffect(() => {
    getEstaciones();
  }, [update]);

  useFocusEffect(
    useCallback(() => {
      retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log(value);
            return value;
          } else return null;
        } catch (error) {
          console.log(error);
        }
      };

      retrieveData("@showCulturalEvents").then((switchEvents) => {
        console.log("THEN : " + switchEvents);
        if (switchEvents === "true") {
          console.log("entra getevents");
          getCatCulturaEvents();
        } else {
          console.log("entra events vacio");
          setCatCulturaEvents([]);
        }
      });
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar navigation={navigation} />
      {/* <Mapa {...DIM} /> */}
      <Mapa
        style={styles.map}
        navigation={navigation}
        estacionesParam={estaciones}
        catCulturaEventsParam={catCulturaEvents}
      />
      <NavigationTab style={styles.navBar} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  navBar: {
    position: "absolute",
    borderRadius: 30,
    bottom: Constants.statusBarHeight / 2,
    alignSelf: "center",
    width: "95%",
  },
  map: {
    height: "90%",
  },
});
