import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';


export default function NavigationTab(props) {
  return (
  <View style={[styles.container, props.style]}>
    <Text> HOLAAA </Text>
    <Text> HOLAAA </Text>
    <Text> HOLAAA </Text>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',

  backgroundColor: "#abdea9",
  paddingTop: Constants.statusBarHeight, // NO SABEMOS SI EN IOS FUNCIONA
  height: "10%",
  width: "100%",
},
});