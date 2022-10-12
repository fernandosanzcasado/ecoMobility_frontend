import * as React from "react";
import * as Location from "expo-location";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_KEY } from "@env";

export default function Mapa() {
  const [origin, setOrigin] = React.useState({
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
  React.useEffect(() => {
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

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        //La quantitat de distància d'est a oest mesurada en graus a mostrar per a la regió del mapa
        latitudeDelta: 0.09, // coordenadas para iOS (hay que cambiarlas)
        longitudeDelta: 0.04, // coordenadas para iOS (hay que cambiarlas)
      }}
    >
      <Marker
        draggable
        coordinate={origin}
        onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
      />

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
    height: "100%",
    width: "100%",
  },
});
