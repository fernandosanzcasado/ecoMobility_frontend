import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Slider from "@react-native-community/slider";

import Constants from "expo-constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useTranslation } from "react-i18next";

export default function FilterScreen({ navigation }) {
  [bicicletes, setBicicletes] = useState(false);
  [vehicles, setVehicles] = useState(false);
  [supercharge, setSupercharge] = useState(false);
  [preu, setPreu] = useState(false);
  [range, setRange] = useState(5);
  [apply, setApply] = useState(false);

  const { t } = useTranslation();

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
        <Text style={styles.filtertitle}>{t("Filters.Filter_By")}</Text>
        <View style={styles.filterbox}>
          <TouchableOpacity
            style={styles.rowfilter}
            onPress={() => {
              setBicicletes(!bicicletes);
            }}
          >
            <Text style={styles.filtertext}>{t("Filters.Bike_Stations")}</Text>
            <Icon
              name={bicicletes ? "toggle-on" : "toggle-off"}
              size={40}
              style={{ paddingRight: Constants.statusBarHeight }}
            />
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity
            style={styles.rowfilter}
            onPress={() => {
              setVehicles(!vehicles);
            }}
          >
            <Text style={styles.filtertext}>
              {t("Filters.Electric_Stations")}
            </Text>
            <Icon
              name={vehicles ? "toggle-on" : "toggle-off"}
              size={40}
              style={{ paddingRight: Constants.statusBarHeight }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingRight: Constants.statusBarHeight,
            }}
            onPress={() => {
              setSupercharge(!supercharge);
            }}
          >
            <Text
              style={[
                styles.filtertext2,
                {
                  backgroundColor: supercharge ? "#D1EABE" : "#FFFFFF",
                },
              ]}
            >
              {t("Filters.Supercharge")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingRight: Constants.statusBarHeight,
            }}
            onPress={() => {
              setPreu(!preu);
            }}
          >
            <Text
              style={[
                styles.filtertext2,
                { backgroundColor: preu ? "#D1EABE" : "#FFFFFF" },
              ]}
            >
              {t("Filters.Price")}
            </Text>
          </TouchableOpacity>
          {preu && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}> Preu{"\n"} entre:</Text>
              <TouchableOpacity style={styles.selectprice}>
                <Text> 0.20-0.30 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectprice}>
                <Text> 0.31-0.50 </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectprice}>
                <Text> 0.51-0.79 </Text>
              </TouchableOpacity>
              <Text>euros/kWh</Text>
            </View>
          )}
          <View style={styles.line} />
          <Text style={styles.valoration}> {t("Filters.Rating")} </Text>
          <View style={styles.slideBar}>
            <Slider
              style={{ width: 200, height: 10 }}
              minimumValue={0}
              maximumValue={5}
              minimumTrackTintColor="#2D803F"
              maximumTrackTintColor="#BAF35B"
              alignSelf="center"
              value={2.5}
              onValueChange={(value) => setRange(parseInt(value))}
            />
            <Text style={styles.valoration}>{range}</Text>
            <Icon
              style={{
                alignSelf: "center",
                marginLeft: Constants.statusBarHeight / 3,
              }}
              name="star"
              size={range <= 2.5 ? 20 : 30}
              color="#CFCF44"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setApply(!apply);
            }}
          >
            <Text style={styles.buttonTxt}>{t("Filters.Apply_Filters")}</Text>
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
  slideBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  selectprice: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#226C04",
    marginLeft: Constants.statusBarHeight / 5,
    marginRight: Constants.statusBarHeight / 5,
    fontSize: 14,
    height: 25,
  },
});
