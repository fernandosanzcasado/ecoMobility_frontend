import { useState, useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import MapViewDirections from "react-native-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome5";
import Button from "react-native-paper";

import { GOOGLE_KEY, BASE_URL } from "@env";
import MiniTapView from "./MiniTapView";

export default function Mapa({
  style,
  navigation,
  estacionesParam,
  catCulturaEventsParam,
  setParentCoords,
}) {
  // Origin coordinates
  const [origin, setOrigin] = useState({
    latitude: 41.386976,
    longitude: 2.169998,
  });

  const [destination, setDestination] = useState(null);

  const [tapView, setTapView] = useState(false);
  const [id, setId] = useState("");
  const [ruta, setRuta] = useState(false);
  const mapRef = useRef();
  const estaciones = estacionesParam;
  const eventos = catCulturaEventsParam;

  /*Amb aquesta funció pregunto a l'usuari si vol donar-me la ubicació per tal de poder
  realitzar rutes en temps real, per anar actualitzant-se es pot fer un refresh cada 10-15segons
  de la posició de l'usuari*/
  useEffect(() => {
    getLocationPermission();
  }, []);

  async function getLocationPermission() {
    await Location.requestForegroundPermissionsAsync()
      .then(async (res) => {
        console.log("RES");
        console.log(res);
        if (res.status === "granted") {
          console.log("GRANTED");
          await Location.getCurrentPositionAsync({})
            .then((location) => {
              console.log("COORDS");
              console.log(location);
              const current = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              };
              setOrigin(current);
              setParentCoords(current);
            })
            .catch(console.error("Error getCurrentPositionAsync"));
        } else {
          alert("Permission denied");
          return;
        }
      })
      .catch(console.error("Error requestForegroundPermissionsAsync"));
  }

  const hideTapView = () => {
    setTapView(false);
    setDestination(null);
  };

  async function startTravel(latitud, longitud) {
    setTapView(false);
    setDestination({
      latitude: parseFloat(latitud),
      longitude: parseFloat(longitud),
    });
  }

  useEffect(() => {
    setRuta(destination !== null);
  }, [destination]);

  // useEffect(() => {
  //   setRuta(true);
  // }, [destination]);

  return (
    <>
      {tapView && (
        <MiniTapView
          ID={id}
          navigation={navigation}
          hideFunction={hideTapView}
          startRoute={startTravel}
        />
      )}
      <MapView
        // style={{
        //   height: props.heightMap,
        //   width: props.widthMap,
        // }}
        ref={mapRef}
        style={[styles.map, style]}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          //La quantitat de distància d'est a oest mesurada en graus a mostrar per a la regió del mapa
          latitudeDelta: 0.1, // coordenadas para iOS (hay que cambiarlas)
          longitudeDelta: 0.1, // coordenadas para iOS (hay que cambiarlas)
        }}
        camera={{
          center: { latitude: origin.latitude, longitude: origin.longitude },
          pitch: 0,
          zoom: destination ? 20 : 30,
          heading: 0,
          altitude: 0,
        }}
        radius={50}
      >
        <TouchableOpacity>
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

        {estaciones?.map((estacion) => (
          <Marker
            key={estacion.id}
            coordinate={{
              longitude: parseFloat(estacion.longitud ?? 0.0),
              latitude: parseFloat(estacion.latitud ?? 0.0),
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

        {eventos?.map((evento) => (
          <Marker
            key={Math.random()}
            coordinate={{
              longitude: parseFloat(evento.longitud ?? 0.0),
              latitude: parseFloat(evento.latitud ?? 0.0),
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name="ticket-alt" size={20}></Icon>
            </View>
          </Marker>
        ))}

        {ruta && (
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_KEY}
            strokeColor="green"
            strokeWidth={4}
            optimizeWaypoints={true}
            // onStart={(params) => {
            //   console.log(
            //     `Started routing between "${params.origin}" and "${params.destination}"`
            //   );
            // }}
            // onReady={(result) => {
            //   mapRef.current.fitToCoordinates(result.coordinates);
            //   console.log(`Distance: ${result.distance} km.`);
            //   console.log(`Duration: ${result.duration} min.`);
            // }}
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
