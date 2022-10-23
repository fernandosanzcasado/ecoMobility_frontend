import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
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

import LogoText from "../components/ecomobility/LogoText";

const listStations = [
  "França",
  "Muntaner",
  "Av.Sarria",
  "Urgell",
  "Borrell",
  "Diagonal",
  "Londres",
  "Paris",
  "Jaume I",
  "Bisbe",
  "Portal de l'Àngel",
  "Pau Claris",
  "Passeig de Gracia",
  "Esculleders",
  "Rambla",
  "ueeeee",
  "sadasdad",
  "dadasdsa",
  "fsegfsad",
  "HolaBuenasTardes",
  "HolaBuenosDias",
  "HolaBuenasMañanas",
];

export default function SearchBar({ navigation }) {
  //Pantalla negra al escriure
  const [searchBarFocused, setSearchBarFocused] = useState(false);

  //Filtre de la pantalla
  const [filterData, setfilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    stations();
  }, []);

  const stations = () => {
    setfilterData(listStations);
    setmasterData(listStations);
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = { item } ? item.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
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
          <Icon
            name={searchBarFocused ? "arrow-left" : "search"}
            size={25}
            color="#000000"
            style={styles.lupe}
          />
          <TextInput
            placeholder=" Search "
            onSubmitEditing={Keyboard.dismiss}
            value={search}
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
          />
        </Animatable.View>
      </View>
      <FlatList
        style={{ backgroundColor: searchBarFocused ? "#A19A9A" : "#FFFFFF" }}
        data={filterData}
        renderItem={({ item }) => (
          <View style={styles.separador}>
            <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
            <View
              style={{
                alignSelf: "center",
                paddingHorizontal: Constants.statusBarHeight,
              }}
            >
              <Icon name="arrow-right" size={25}></Icon>
            </View>
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
    borderColor: "#2D803F",
  },
});
