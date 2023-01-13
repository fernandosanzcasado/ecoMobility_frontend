import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";

import axios from "axios";
import * as Location from "expo-location";
import { Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import MapViewDirections from "react-native-maps-directions";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, IconButton } from "react-native-paper";
import { useTranslation } from "react-i18next";

import { GOOGLE_KEY, BASE_URL } from "@env";
import MiniTapView from "./MiniTapView";
import MiniTapView2 from "./MiniTapView2";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Mapa({
  style,
  navigation,
  estacionesParam,
  bicingParam,
  catCulturaEventsParam,
  setParentCoords,
}) {
  // Origin coordinates
  const [origin, setOrigin] = useState({
    latitude: 41.386976,
    longitude: 2.169998,
  });
  const { t, i18n } = useTranslation();

  const [destination, setDestination] = useState(null);

  const [tapView2, setTapView2] = useState(false);
  const [tapView, setTapView] = useState(false);
  const [id, setId] = useState("");
  const [ruta, setRuta] = useState(false);
  const [tripPanel, setTripPanel] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [vehicleSelected, setVehicleSelected] = useState("");
  const [kmRuta, setKmRuta] = useState(0);

  const mapRef = useRef();
  const estaciones = estacionesParam;
  const bicing = bicingParam;
  const eventos = catCulturaEventsParam;
  // var intervalSetted = false;

  /*Amb aquesta funció pregunto a l'usuari si vol donar-me la ubicació per tal de poder
  realitzar rutes en temps real, per anar actualitzant-se es pot fer un refresh cada 10-15segons
  de la posició de l'usuari*/
  useEffect(() => {
    getLocationPermission();

    // if (!intervalSetted) {
    //   intervalSetted = true;
    //   setInterval(() => {
    //     console.log("TEORIA");
    //     // const location = await getCurrentLocation();
    //     // doSomethingWithLocation(location);
    //   }, 10000);
    // }
  }, []);

  async function getLocationPermission() {
    await Location.requestForegroundPermissionsAsync()
      .then(async (res) => {
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
            .catch(console.log("ERROR: Error getCurrentPositionAsync"));
        } else {
          alert("Permission denied");
          return;
        }
      })
      .catch(console.log("ERROR: Error requestForegroundPermissionsAsync"));
  }

  const hideTapView = () => {
    setTapView(false);
    setDestination(null);
  };

  async function startTravel(latitud, longitud) {
    setTapView(false);
    setTripPanel(true);
    setVehicle(true);
    setDestination({
      latitude: parseFloat(latitud),
      longitude: parseFloat(longitud),
    });
  }

  function handleCancelRoute() {
    setTripPanel(false);
    setKmRuta(0);
    setVehicle(false);
    setVehicleSelected("");
    setRuta(false);
    setDestination(null);
    cancelRouteBackend();
  }

  async function startRouteBackend() {
    console.log(vehicleSelected);
    axios
      .post(
        `http://${BASE_URL}/api/v2/routes`,
        {
          startingCoords: `${origin.latitude.toString()},${origin.longitude.toString()}`,
          endingCoords: `${destination.latitude.toString()},${destination.longitude.toString()}`,
          vehicle: vehicleSelected,
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function cancelRouteBackend() {
    axios
      .put(
        `http://${BASE_URL}/api/v2/routes`,
        {
          cancelled: true,
          km: 0,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function finishRouteToBackend() {
    axios
      .put(
        `http://${BASE_URL}/api/v2/routes`,
        {
          cancelled: false,
          km: kmRuta,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function handleFinishRoute() {
    setKmRuta(0);
    setTripPanel(false);
    setKmRuta(0);
    setVehicle(false);
    setVehicleSelected("");
    setRuta(false);
    setDestination(null);
    await finishRouteToBackend();
  }

  function handleRoute() {
    setVehicle(false);
    setRuta(true);
    startRouteBackend();
  }
  // useEffect(() => {

  //   //    setRuta(destination !== null);
  // }, [destination]);

  // useEffect(() => {
  //   setRuta(true);
  // }, [destination]);

  useEffect(() => {
    if (!!vehicleSelected) {
      handleRoute();
    }
  }, [vehicleSelected]);

  return (
    <>
      {/* {tapView2 && (
        <MiniTapView2
          ID={id}
          navigation={navigation}
          hideFunction={hideTapView}
          startRoute={startTravel}
        />
      )} */}
      {tapView && (
        <MiniTapView
          ID={id}
          navigation={navigation}
          hideFunction={hideTapView}
          startRoute={startTravel}
        />
      )}
      {vehicle && (
        <View style={styles.vehicle}>
          <IconButton
            icon="bicycle"
            size={50}
            onPress={async () => {
              setVehicleSelected("BICYCLING");
            }}
          />
          <IconButton
            icon="car"
            size={50}
            onPress={async () => {
              setVehicleSelected("DRIVING");
            }}
          />
        </View>
      )}
      {tripPanel && (
        <View style={styles.buttonstyle}>
          <Button
            icon="crosshairs-off"
            mode="contained"
            onPress={handleCancelRoute}
            buttonColor="#ca4768"
            style={styles.tripButton}
          >
            {t("Maps.Cancel_Route")}
          </Button>
          <Button
            icon="routes"
            mode="contained"
            onPress={handleFinishRoute}
            buttonColor="#4567cb"
            style={styles.tripButton}
            disabled={!ruta}
          >
            {t("Maps.Finish_Trip")}
          </Button>
        </View>
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
          latitudeDelta: 1, // coordenadas para iOS (hay que cambiarlas)
          longitudeDelta: 1, // coordenadas para iOS (hay que cambiarlas)
        }}
        camera={{
          center: { latitude: origin.latitude, longitude: origin.longitude },
          pitch: 0,
          zoom: destination ? 17 : 15,
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
              setId(estacion.id);
              setTapView(true);
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

        {bicing?.map((bicingStation) => (
          <Marker
            key={bicingStation.id}
            coordinate={{
              longitude: parseFloat(bicingStation.lon ?? 0.0),
              latitude: parseFloat(bicingStation.lat ?? 0.0),
            }}
            onPress={() => {
              navigation.navigate("BikePoint", { idStation: bicingStation.id });
            }}
            tracksViewChanges={false}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Icon name="bicycle" size={20}></Icon>
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
            mode={vehicleSelected}
            // onStart={(params) => {
            //   console.log(
            //     `Started routing between "${params.origin}" and "${params.destination}"`
            //   );
            // }}
            onReady={(result) => {
              mapRef.current.fitToCoordinates(result.coordinates);
              // console.log(`Distance: ${result.distance} km.`);
              // console.log(`Duration: ${result.duration} min.`);
              setKmRuta(result.distance);
            }}
          />
        )}
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  buttonstyle: {
    backgroundColor: "#b3eebf",
    opacity: 1,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 0,
    height: "12.5%",
    width: "100%",
    zIndex: 101,
  },
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
  tripButton: {
    //top: "50%",
    //left: "50%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
  },
  vehicle: {
    opacity: 0.8,
    backgroundColor: "grey",
    borderRadius: 15,
    position: "absolute",
    marginTop: windowHeight / 3,
    marginLeft: windowWidth / 3,
    display: "flex",
    flexDirection: "row",
    zIndex: 100,
  },
});
