import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button, Card, Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import axios from "axios";
import { BASE_URL } from "@env";

export default function ChargePoint({ route, navigation }) {
  [favourite, setFavourite] = useState(false);
  const { idStation } = route.params;
  //Pillar los atributos y en caso de que estén vacíos poner un booleano a false
  //renderizar los atributos de la estación en función de los booleanos
  //DE MOMENT--------------------------------
  const [tipuscorrent, setTipusCorrent] = useState(false);
  const [tipusvehicle, setTipusVehicle] = useState(false);
  const [tipusconexio, setTipusconexio] = useState(false);
  //--------------------------------------------------------
  const [est, setEst] = useState({});
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v1/estaciones/${idStation}`
        );
        setEst(res.data);
        //--------
        if (est.tipoCorriente != "") setTipusCorrent(true);
        if (est.tipoVehiculo != "") setTipusVehicle(true);
        if (est.tipoConexion != "") setTipusconexio(true);
        //--------
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  return (
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
          <TouchableOpacity
            onPress={() => {
              setFavourite(!favourite);
            }}
          >
            <Icon
              name={favourite ? "heart" : "heart-o"}
              size={Constants.statusBarHeight / 1.5}
              color={favourite ? "#DF1818" : "#DF1818"}
              style={{ marginRight: Constants.statusBarHeight / 1.5 }}
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
            marginBottom: Constants.statusBarHeight,
          }}
        >
          {est.direccion}
        </Text>
      </SafeAreaView>
      <Card>
        <Card.Content>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="car" size={25} />
            <Text style={{ alignSelf: "center" }}>
              {est.tipoVehiculo != null
                ? est.tipoVehiculo
                : "No hay información disponible"}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="bolt" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.tipoCorriente != null
                ? est.tipoCorriente
                : `No hay información disponible`}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="clock-o" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.tipoVelocidad != null
                ? est.tipoVelocidad
                : `No hay información disponible`}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="plug" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.tipoConexion != null
                ? est.tipoConexion
                : `No hay información disponible`}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="map-marker" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.provincia != null
                ? est.provincia
                : `No hay información disponible`}
            </Text>
            <Text style={{ alignSelf: "center" }}>
              {est.municipio != null
                ? est.municipio
                : `No hay información disponible`}
            </Text>
            <Divider />
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="superpowers" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.potencia != null
                ? est.potencia
                : `No hay información disponible`}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="sort-numeric-asc" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.nPlazas != null
                ? est.nPlazas
                : `No hay información disponible`}
            </Text>
          </View>
          <Divider />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Icon name="location-arrow" size={30} />
            <Text style={{ alignSelf: "center" }}>
              {est.longitud != null
                ? est.longitud
                : `No hay información disponible`}
            </Text>
            <Text style={{ alignSelf: "center" }}>
              {est.latitud != null
                ? est.latitud
                : `No hay información disponible`}
            </Text>
          </View>
        </Card.Content>
      </Card>

      <View style={styles.buttons}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginTop: Constants.statusBarHeight }}>Check In</Text>
          <Button
            icon="format-list-checks"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#51E15E",
              },
            }}
            contentStyle={{ height: 60, width: 60 }}
            onPress={() => {
              console.log("Check IN");
            }}
          ></Button>
        </View>
        <View
          style={{
            marginTop: Constants.statusBarHeight * 1.5,
            flexDirection: "column",
          }}
        >
          <Text style={{ marginTop: Constants.statusBarHeight }}>Anar-hi</Text>
          <Button
            icon="sign-direction"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#51BAE1",
              },
            }}
            contentStyle={{ height: 60, width: 60 }}
          ></Button>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ marginTop: Constants.statusBarHeight }}>
            Check Out
          </Text>
          <Button
            icon="playlist-remove"
            labelStyle={{ fontSize: Constants.statusBarHeight * 1.5 }}
            theme={{
              colors: {
                primary: "#E14C27",
              },
            }}
            contentStyle={{ height: 60, width: 80 }}
            onPress={() => {
              console.log("CHECK OUT");
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    height: "30%",
    width: "100%",
    flexDirection: "column",
    marginBottom: Constants.statusBarHeight,
  },
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#565655",
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: Constants.statusBarHeight,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight / 1.5,
  },
});
