// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Dimensions,
// } from "react-native";
// import React, { useState, useEffect } from "react";

// import { Card, Button } from "react-native-paper";
// import Constants from "expo-constants";
// import Icon from "react-native-vector-icons/MaterialIcons";
// import axios from "axios";
// import OutsidePressHandler from "react-native-outside-press";
// import { BASE_URL } from "@env";

// const ancho = Dimensions.get("window").width;

// const alto = Dimensions.get("window").height;

// export default function MiniTapView2({
//   ID,
//   navigation,
//   hideFunction,
//   startRoute,
// }) {
//   const [est, setEst] = useState({});
//   useEffect(() => {
//     async function getEstaciones() {
//       try {
//         const res = await axios.get(
//           `http://${BASE_URL}/api/v2/bicing/${idStation}`,
//           { withCredentials: true }
//         );
//         console.log(res.data);
//         setEst(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getEstaciones();
//   }, []);

//   const handlePressOut = () => {
//     hideFunction();
//   };

//   return (
//     <OutsidePressHandler
//       onOutsidePress={() => {
//         hideFunction();
//       }}
//       style={styles.miniview}
//     >
//       <Card style={styles.cardStyle}>
//         <Card.Content>
//           <Text style={styles.Title}>{est.street}</Text>
//           <View style={{ flexDirection: "row" }}>
//             <Icon
//               name="electric-bike"
//               size={Constants.statusBarHeight / 2.5}
//               style={{ alignSelf: "center" }}
//             ></Icon>
//             <Text style={styles.text}>
//               {est.numBikesAvailableTypes?.ebike ??
//                 `No hay información disponible`}
//             </Text>
//           </View>
//           <View style={{ flexDirection: "row" }}>
//             <Icon
//               name="pedal-bike"
//               size={Constants.statusBarHeight / 3}
//               style={{ alignSelf: "center" }}
//             ></Icon>
//             <Text style={styles.text}>
//               {est.numBikesAvailableTypes?.mechanical ??
//                 "No hay información disponible"}
//             </Text>
//           </View>
//         </Card.Content>
//         <Card.Actions style={{ flexDirection: "row" }}>
//           <Button
//             contentStyle={styles.buttonstyle}
//             theme={{
//               colors: {
//                 primary: "#FFFFFF",
//               },
//             }}
//             labelStyle={{ fontSize: 10 }}
//             onPress={() => {
//               startRoute(est.latitud, est.longitud);
//             }}
//           >
//             ANAR-HI
//           </Button>
//           <View
//             style={
//               {
//                 //flexDirection: "row",
//                 //justifyContent: "space-between",
//               }
//             }
//           >
//             <Button
//               labelStyle={{ fontSize: Constants.statusBarHeight / 3.5 }}
//               theme={{
//                 colors: {
//                   primary: "#518BDF",
//                 },
//               }}
//               onPress={() => {
//                 navigation.navigate("BikePoint", { idStation: ID });
//               }}
//             >
//               Más información
//             </Button>
//             <Button
//               labelStyle={{ fontSize: Constants.statusBarHeight / 3.5 }}
//               theme={{
//                 colors: {
//                   primary: "#518BDF",
//                 },
//               }}
//               style={{ marginRight: 5 }}
//               onPress={() => {
//                 hideFunction();
//               }}
//             >
//               Cancelar
//             </Button>
//           </View>
//         </Card.Actions>
//       </Card>
//     </OutsidePressHandler>
//   );
// }

// const styles = StyleSheet.create({
//   miniview: {
//     position: "absolute",
//     top: "30%",
//     left: "20%",
//     // backgroundColor: "#FFFFFF",
//     // width: 200,
//     // height: 100,
//     zIndex: 1,
//   },
//   cardStyle: {
//     backgroundColor: "#FFFFFF",
//     width: 240,
//     height: 180,
//     elevation: 5,
//   },
//   buttonstyle: {
//     backgroundColor: "#518BDF",
//     height: 35,
//     width: 90,
//   },
//   Title: {
//     fontWeight: "bold",
//     fontSize: 13,
//   },
//   text: {
//     fontSize: 13,
//     marginLeft: 2,
//     alignSelf: "center",
//   },
// });
