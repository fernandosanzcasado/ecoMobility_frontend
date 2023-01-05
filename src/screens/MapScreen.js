import { SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import Constants from "expo-constants";
import axios from "axios";

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
      console.log("PARAMSLIST");
      console.log(paramsList.getParams());
      if (res.data.status === 200 && res.data) {
        console.log("DATA CORRECTA");
        setEstaciones(res.data);
      } else {
        console.log("DATA VACIA");
        setEstaciones([]);
      }
      //console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [estaciones, setEstaciones] = useState();

  useEffect(() => {
    getEstaciones();
  }, [update]);

  console.log(navigation);
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Toolbar navigation={navigation} />
      {/* <Mapa {...DIM} /> */}
      <Mapa
        style={styles.map}
        navigation={navigation}
        estacionesParam={estaciones}
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
