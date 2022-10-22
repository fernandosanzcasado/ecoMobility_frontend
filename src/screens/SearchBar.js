import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
  Keyboard,
  ActivityIndicator,
} from "react-native";

import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";

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
];

export default function SSearchBar() {
  const [searchBarFocused, setSearchBarFocused] = useState(false);

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
    <View>
      <View style={styles.safeAreaContainer}>
        <View style={styles.text}>
          <Text style={styles.eco}> eco</Text>
          <Text style={styles.mobility}>Mobility </Text>
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
          />
        </Animatable.View>
      </View>
      <FlatList
        style={{ backgroundColor: searchBarFocused ? "#A19A9A" : "#FFFFFF" }}
        data={listStations}
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
    </View>
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
    justifyContent: "center",
    flexDirection: "row",
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
