import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Slider from "@react-native-community/slider";

import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function FilterScreen({ navigation }) {
  return (
    <SafeAreaView>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
          >
            <Icon
              name="arrow-left"
              size={Constants.statusBarHeight}
              color="#FFFFFF"
              style={{ paddingLeft: Constants.statusBarHeight }}
            ></Icon>
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.eco}> eco</Text>
            <Text style={styles.mobility}>Mobility </Text>
          </View>
        </View>
      </SafeAreaView>
      <View>
        <Text style={styles.filtertitle}>FILTRAR PER: </Text>
        <View style={styles.filterbox}>
          <TouchableOpacity style={styles.rowfilter}>
            <Text style={styles.filtertext}>Estacions de bicicletes</Text>
            <Icon
              name="toggle-on"
              size={40}
              style={{ paddingRight: Constants.statusBarHeight }}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.rowfilter}>
            <Text style={styles.filtertext}>
              Estacions de vehícles elèctrics
            </Text>
            <Icon
              name="toggle-off"
              size={40}
              style={{ paddingRight: Constants.statusBarHeight }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: Constants.statusBarHeight }}>
            <Text style={styles.filtertext2}> Supercàrrega </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingRight: Constants.statusBarHeight }}>
            <Text style={styles.filtertext2}> Preu </Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <Text style={styles.valoration}> Valoració </Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={5}
            minimumTrackTintColor="#2D803F"
            maximumTrackTintColor="#BAF35B"
            alignSelf="center"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Apply Filters</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    aligItems: "flex-start",
    backgroundColor: "#2D803F",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 150,
  },
  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  eco: {
    color: "#BAF35B",
    fontSize: 30,
  },
  mobility: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  filtertitle: {
    fontWeight: "700",
    fontSize: 20,
    fontFamily: "sans-serif",
    color: "#696767",
    marginVertical: Constants.statusBarHeight / 2,
    marginLeft: Constants.statusBarHeight / 2,
    height: Constants.statusBarHeight * 2,
  },
  filterbox: {},
  cercle: {
    borderRadius: 20,
    borderWidth: 2,
    marginVertical: Constants.statusBarHeight / 2,
    marginLeft: Constants.statusBarHeight / 2,
    alignSelf: "flex-start",
  },
  filtertext: {
    fontWeight: "700",
    marginLeft: Constants.statusBarHeight,
    fontSize: 16,
    alignSelf: "center",
  },
  filtertext2: {
    fontWeight: "500",
    marginLeft: Constants.statusBarHeight,
    marginVertical: Constants.statusBarHeight / 2,
    fontSize: 14,
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#2D803F",
    paddingRight: 2,
    paddingLeft: 3,
  },
  line: {
    borderBottomWidth: 1.5,
    height: 1,
    marginVertical: 10,
    borderColor: "#2D803F",
    opacity: 0.2,
  },
  rowfilter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  valoration: {
    marginVertical: Constants.statusBarHeight,
    fontWeight: "700",
    fontSize: 16,
    alignSelf: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#2D803F",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight,
  },
  buttonTxt: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
