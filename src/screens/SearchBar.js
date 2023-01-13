import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import { useTranslation } from "react-i18next";
import { Card, Button } from "react-native-paper";

import axios from "axios";
import Icon from "react-native-vector-icons/FontAwesome5";
import LogoText from "../components/ecomobility/LogoText";
import { BASE_URL } from "@env";

export default function SearchBar({ navigation }) {
  //Pantalla negra al escriure
  const [searchBarFocused, setSearchBarFocused] = useState(false);
  const [estaciones, setEstaciones] = useState([]);

  //Filtre de la pantalla
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState("");

  //ID de la estació a la que volem accedir
  const [stationID, setStationID] = useState([]);

  const { t } = useTranslation();

  useEffect(() => {
    async function getEstaciones() {
      try {
        const res = await axios.get(
          `http://${BASE_URL}/api/v2/estaciones/direccion`,
          { withCredentials: true }
        );
        setEstaciones(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEstaciones();
  }, []);

  useEffect(() => {
    setfilterData(estaciones.map((estacion) => estacion.direccion));
    setmasterData(estaciones.map((estacion) => estacion.direccion));
  }, [estaciones]);

  const searchFilter = (
    text,
    updateFilterFunc,
    updateSearchFunc,
    masterData
  ) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = { item } ? item.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      updateFilterFunc(newData);
      updateSearchFunc(text);
    } else {
      updateFilterFunc(masterData);
      updateSearchFunc(text);
    }
  };

  //Detecció quan el teclat surt a pantalla per poder canviar el color de fons
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setSearchBarFocused(true);
    });

    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setSearchBarFocused(false);
    });

    //PARA IOS
    const willshowSubscription = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        setSearchBarFocused(true);
      }
    );

    return () => {
      showSubscription.remove();
      willshowSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const primeraExec = useRef(false);
  useEffect(() => {
    if (primeraExec.current) {
      navigation.navigate("ChargePoint", { idStation: stationID });
    } else primeraExec.current = true;
  }, [stationID]);

  const goToChargePoint = (item) => {
    const id = estaciones.find((x) => x.direccion === item).id;
    setStationID(id);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainView}>
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
          <Animatable.View animation="bounceInDown">
            <LogoText style={styles.text} />
          </Animatable.View>
        </View>
        <Animatable.View
          animation="slideInRight"
          duration={1000}
          style={styles.searchBox}
        >
          <Animatable.View
            animation={searchBarFocused ? "fadeInLeft" : "fadeInRight"}
          ></Animatable.View>
          <TouchableOpacity
            onPress={() => {
              setSearchBarFocused(false);
              Keyboard.dismiss();
            }}
          >
            <Icon
              name={searchBarFocused ? "arrow-left" : "search"}
              size={25}
              color="#000000"
              style={styles.lupe}
            />
          </TouchableOpacity>
          <TextInput
            placeholder={t("Search_Bar.Search")}
            onSubmitEditing={Keyboard.dismiss}
            value={search}
            underlineColorAndroid="transparent"
            onChangeText={(text) =>
              searchFilter(text, setfilterData, setSearch, masterData)
            }
            style={{ width: 250 }}
          />
        </Animatable.View>
      </View>
      <FlatList
        style={{ backgroundColor: searchBarFocused ? "#A19A9A" : "#FFFFFF" }}
        data={filterData}
        renderItem={({ item }) => (
          <View style={styles.separador}>
            <Card elevation={1} style={{ flexGrow: 1 }}>
              <Card.Content style={{ display: "flex", flexDirection: "row" }}>
                <Text numberOfLines={1} style={{ alignSelf: "center" }}>
                  {item.length < 50 ? `${item}` : `${item.substring(0, 49)}...`}
                </Text>
                <Button
                  onPress={() => {
                    goToChargePoint(item);
                  }}
                  icon="car-info"
                  compact={true}
                  labelStyle={{ fontSize: Constants.statusBarHeight / 1.5 }}
                />
              </Card.Content>
            </Card>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: "#2D803F",
  },
  mainView: {
    aligItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
    height: 150,
  },
  text: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBox: {
    height: 50,
    width: 250,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  lupe: {
    paddingHorizontal: 10,
  },
  separador: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    opacity: 0.2,
    borderColor: "#FFFFFF",
  },
});
