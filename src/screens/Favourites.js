import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Card, Button } from "react-native-paper";

import HeaderTitle from "../components/ecomobility/HeaderTitle";
import axios from "axios";
import { BASE_URL } from "@env";
import Constants from "expo-constants";

export default function Favourites({ navigation }) {
  const [estaciones, setEstaciones] = useState([]);
  const [filterData, setfilterData] = useState([]);
  const [directions, setDirections] = useState([]);

  useEffect(() => {
    function getEstaciones() {
      axios
        .get(`http://${BASE_URL}/api/v2/users/me/getInfo`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data.favouriteStations);
          setEstaciones(res.data.favouriteStations);
        })
        .catch((error) => console.log(error));
    }
    getEstaciones();
  }, []);

  useEffect(() => {
    console.log("estaciones", estaciones);
    estaciones?.forEach((estacionId) => {
      console.log("iteracion", estacionId);
      axios
        .get(
          `http://${BASE_URL}/api/v2/estaciones/info/${estacionId}/direccion`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          const dir = res.data.direccion;
          if (dir) {
            console.log("hay dir", dir);
            setDirections([...directions, dir]);
            console.log("directions", directions);
          }
        })
        .catch((error) => console.log(error));
    });
  }, [estaciones]);

  useEffect(() => {
    setfilterData(directions);
  }, [directions]);

  return (
    <View>
      <HeaderTitle name={"Favourite stations"} navigation={navigation} />
      <FlatList
        style={{ backgroundColor: "#FFFFFF" }}
        data={filterData}
        renderItem={({ item }) => (
          <View style={styles.separador}>
            <Card elevation={1} style={{ flexGrow: 1 }}>
              <Card.Content style={{ display: "flex", flexDirection: "row" }}>
                <Text numberOfLines={1} style={{ alignSelf: "center" }}>
                  {item.length < 50 ? `${item}` : `${item.substring(0, 49)}...`}
                </Text>
                <Button
                  icon="heart"
                  compact={true}
                  labelStyle={{ fontSize: Constants.statusBarHeight / 1.5 }}
                />
              </Card.Content>
            </Card>
          </View>
        )}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#FFFFFF",
  },
});
