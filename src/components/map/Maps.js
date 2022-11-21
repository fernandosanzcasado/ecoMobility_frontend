import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import MapViewDirections from "react-native-maps-directions";
import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";

import { GOOGLE_KEY, BASE_URL } from "@env";
import MiniTapView from "./MiniTapView";

export default function Mapa({ style, navigation }) {
  const [origin, setOrigin] = useState({
    latitude: 41.386976,
    longitude: 2.169998,
  });

  const [destination, setDestination] = useState({});

  const [tapview, setTapView] = useState(false);
  const [id, setId] = useState("");
  const [ruta, setRuta] = useState(false);

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
          `http://${BASE_URL}/api/v1/estaciones/coordenadas`
        );
        setEstaciones(res.data);
        console.log("DEBUG");
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  const hideTapView = () => {
    setTapView(false);
  };

  async function startTravel(latitud, longitud) {
    setDestination({
      latitude: parseFloat(latitud.replace(",", ".")),
      longitude: parseFloat(longitud.replace(",", ".")),
    });
  }

  useEffect(() => {
    setRuta(true);
  }, [destination]);

  return (
    <>
      {tapview && (
        <MiniTapView
          ID={id}
          navigation={navigation}
          hideFunction={hideTapView}
          startRoute={startTravel}
        />
      )}
      {/* {tapview && <MiniTapView ID={id} navigation={navigation} />} */}
      <MapView
        // style={{
        //   height: props.heightMap,
        //   width: props.widthMap,
        // }}
        style={[styles.map, style]}
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
        radius={50}
      >
        <TouchableOpacity
          onPress={() => {
            console.log("AAAAAAAAAAAAAAAAAAAA");
          }}
        >
          <Marker
            coordinate={origin}
            onDragEnd={(direction) =>
              setOrigin(direction.nativeEvent.coordinate)
            }
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name="user-alt" size={20}></Icon>
              {/* <Text style={{ backgroundColor: "red" }}>S</Text> */}
            </View>
          </Marker>
        </TouchableOpacity>

        {estaciones.map((estacion) => (
          <Marker
            key={estacion.id}
            coordinate={{
              longitude: parseFloat(estacion.longitud.replace(",", ".") ?? 0.0),
              latitude: parseFloat(estacion.latitud.replace(",", ".") ?? 0.0),
            }}
            onPress={() => {
              setTapView(true);
              setId(estacion.id);
            }}
            tracksViewChanges={false}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name="charging-station" size={20}></Icon>
            </View>
          </Marker>
        ))}
        {/* // <Marker
        //   draggable
        //   coordinate={destination}
        //   onDragEnd={(direction) =>
             setDestination(direction.nativeEvent.coordinate)
        }
        /> */}
        {ruta && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_KEY}
            strokeColor="green"
            strokeWidth={3}
          />
        )}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
  },
  miniview: {
    position: "absolute",
    top: "50%",
    left: "50%",
    backgroundColor: "#FF0000",
    width: 100,
    height: 100,
    zIndex: 100,
  },
});
