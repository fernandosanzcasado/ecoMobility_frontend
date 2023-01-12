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
import UserChat from "./UserChat";
import VirtualTree from "./VirtualTree";

const DIM = {
  heightMap: "100%",
  widthMap: "100%",
};

export default function MapScreen({ style, navigation, route }) {
  const { update } = route?.params || 0;
  const [userCoords, setUserCoords] = useState({
    latitude: null,
    longitude: null,
  });

  async function getEstaciones() {
    try {
      let res = await axios.get(`http://${BASE_URL}/api/v2/estaciones`, {
        params: paramsList.getParams(),
      });
      if (res.status === 200) {
        setEstaciones(res.data);
      } else {
        setEstaciones([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCatCulturaEvents() {
    try {
      console.log("EVENTOS LAT:", userCoords.latitude ?? "No latitude");
      console.log("EVENTOS LONG:", userCoords.longitude ?? "No long");
      if (!!userCoords.latitude && !!userCoords.longitude) {
        let res = await axios.get(`http://4.231.36.42:8080/events`, {
          params: {
            lat: userCoords.latitude.toString(),
            long: userCoords.longitude.toString(),
            radius: "2.00",
          },
        });
        if (res.status === 200) {
          setCatCulturaEvents(res.data);
        } else {
          setCatCulturaEvents([]);
        }
      } else {
        console.log("ERROR: No hace llamada eventos cultura");
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

  useEffect(() => {
    getCatCulturaEvents();
  }, [userCoords]);

  useFocusEffect(
    useCallback(() => {
      retrieveData = async (key) => {
        try {
          const value = await AsyncStorage.getItem(key);
          if (value !== null) {
            console.log(key, value);
            return value;
          } else return null;
        } catch (error) {
          console.log(error);
        }
      };

      retrieveData("@showCulturalEvents").then((switchEvents) => {
        console.log("ON RETREIVE DATA SWITCH ASYNCSTORAGE", switchEvents);
        if (switchEvents === "true") {
          console.log("ENTRA EN GET EVENTS");
          getCatCulturaEvents();
        } else {
          console.log("ENTRA EVENTS VACIO");
          setCatCulturaEvents([]);
        }
      });
    }, [])
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar navigation={navigation} />
      <Mapa
        style={styles.map}
        navigation={navigation}
        estacionesParam={estaciones}
        catCulturaEventsParam={catCulturaEvents}
        setParentCoords={setUserCoords}
      />
      <NavigationTab style={styles.navBar} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    display: "flex",
    //alignItems: "flex-start",
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
