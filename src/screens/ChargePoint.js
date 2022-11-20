import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ViewComponent,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ChargePoint({ route, navigation }) {
  [favourite, setFavourite] = useState(false);
  const { idStation } = route.params;
  //Pillar los atributos y en caso de que estén vacíos poner un booleano a false
  //renderizar los atributos de la estación en función de los booleanos

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
          Nombre de la estación + {idStation}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
            style={{ marginRight: Constants.statusBarHeight / 8 }}
          />
          <Icon
            name="star-half-full"
            color="#F1FF45"
            size={Constants.statusBarHeight / 1.5}
          />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Icon name="car" size={Constants.statusBarHeight}></Icon>
          <Text
            style={{
              alignSelf: "center",
              paddingLeft: Constants.statusBarHeight,
            }}
          >
            TIPUS DE VEHICLE
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="bolt"
            size={Constants.statusBarHeight}
            color="#F0B523"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            TIPUS DE CORRENT
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="clock-o"
            size={Constants.statusBarHeight}
            color="#25971D"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            TIPUS VELOCITAT
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="plug"
            size={Constants.statusBarHeight}
            color="#2B7F9E"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            TIPUS CONNEXIÓ
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="map-marker"
            size={Constants.statusBarHeight}
            color="#C23E1E"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            ADREÇA/MUNICIPI/PROVINCIA
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="superpowers"
            size={Constants.statusBarHeight}
            color="#6A258D"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            POTENCIA
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="sort-numeric-asc"
            size={Constants.statusBarHeight}
            color="#BEB919"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            NOMBRE DE PLACES
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="location-arrow"
            size={Constants.statusBarHeight}
            color="#CC8C3B"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            COORDENADES
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon
            name="sort-amount-desc"
            size={Constants.statusBarHeight}
            color="#A42D80"
          ></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            DESIGNACIÓ DESCRIPTIVA
          </Text>
        </View>
        <View style={styles.separador}></View>
        <View style={styles.container}>
          <Icon name="universal-access" size={Constants.statusBarHeight}></Icon>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: Constants.statusBarHeight,
            }}
          >
            ACCES
          </Text>
        </View>
        <View style={styles.separador}></View>
      </ScrollView>
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
    height: "25%",
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
