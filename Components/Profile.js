import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

const Profile = (navigation, route) => {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 10,
            width: "100%",
            backgroundColor: "#000",
            height: 150,
          }}
        >
          <TouchableOpacity>
            /*{" "}
            <Image
              style={{ width: 30, height: 30 }}
              source={require("./assets/images/black.jpg")}
            />{" "}
            */
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: end }}>
          <Image
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              marginTop: -70,
            }}
            source={require("./assets/images/Profile.png")}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
            {" "}
            User name{" "}
          </Text>
          <Text> </Text>
        </View>
      </ScrollView>
    </View>

    /*<TextInput style={styles.tinput} placeholder="Correo electrónico" />
      <TextInput style={styles.tinput} placeholder="Usuario" />
      <TextInput style={styles.tinput} placeholder="Contraseña" />
      <TextInput style={styles.tinput} placeholder="Repite la contraseña" />
      <Button
        style={styles.but}
        title="Regístrate"
        color="#7CFC00"
        onPress={() => Alert.alert("Te has registrado con éxito")}
      /> */
  );
};
