import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";

import Icon from "react-native-vector-icons/FontAwesome5";
import { GOOGLE_KEY } from "@env";

export default function Mapa(props) {
  const [origin, setOrigin] = useState({
    latitude: 41.386976,
    longitude: 2.169998,
  });

  // const [destination, setDestination] = React.useState({
  //   latitude: 41.396976,
  //   longitude: 2.169998,
  // });

  /*Amb aquesta funció pregunto a l'usuari si vol donar-me la ubicació per tal de poder
  realitzar rutes en temps real, per anar actualitzant-se es pot fer un refresh cada 10-15segons
  de la posició de l'usuari*/
  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setOrigin(current);
  }

  const [estaciones, setEstaciones] = useState([]);
  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          "http://10.0.2.2:3000/api/v1/estaciones/coordenadas"
        );
        // console.log(res.data);
        setEstaciones(res.data);
        console.log("DEBUG");
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  return (
    <MapView
      // style={{
      //   height: props.heightMap,
      //   width: props.widthMap,
      // }}
      style={[styles.map, props.style]}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        //La quantitat de distància d'est a oest mesurada en graus a mostrar per a la regió del mapa
        latitudeDelta: 0.09, // coordenadas para iOS (hay que cambiarlas)
        longitudeDelta: 0.04, // coordenadas para iOS (hay que cambiarlas)
      }}
      // camera={{
      //   center: { latitude: origin.latitude, longitude: origin.longitude },
      //   pitch: 0,
      //   zoom: 15,
      //   heading: 0,
      //   altitude: 0,
      // }}
    >
      <TouchableOpacity
        onPress={() => {
          console.log("AAAAAAAAAAAAAAAAAAAA");
        }}
      >
        <Marker
          coordinate={origin}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
          onPress={() => {
            console.log("holabuenastardes");
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Icon name="charging-station" size={20}></Icon>
            {/* <Text style={{ backgroundColor: "red" }}>S</Text> */}
          </View>
        </Marker>
      </TouchableOpacity>

      {estaciones.map((estacion) => (
        <Marker
          key={estacion.ID}
          coordinate={{
            longitude: parseFloat(estacion.LONGITUD ?? 0.0),
            latitude: parseFloat(estacion.LATITUD ?? 0.0),
          }}
        />
      ))}

      {/* <Marker
        draggable
        coordinate={destination}
        onDragEnd={(direction) =>
          setDestination(direction.nativeEvent.coordinate)
        }
      />
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_KEY}
        strokeColor="green"
        strokeWidth={3}
      /> */}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
  },
});
