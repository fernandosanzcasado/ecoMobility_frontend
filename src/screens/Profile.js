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

export default function Profile() {
  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold", padding: 100 }}>
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
}
