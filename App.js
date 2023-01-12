import React, { useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { EventProvider } from "react-native-outside-press";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";
import MapScreen from "./src/screens/MapScreen";

import AccountRegister from "./src/screens/AccountRegister";
import Login from "./src/screens/Login";
import PassRecoverMail from "./src/screens/PassRecoverMail";
import PassRecoverCodeConfirm from "./src/screens/PassRecoverCodeConfirm";
import PasswordChange from "./src/screens/PasswordChange";
import Filters from "./src/screens/Filters";
import SearchBar from "./src/screens/SearchBar";
import ConfirmCurrentPass from "./src/screens/ConfirmCurrentPass";
import MyCalendar from "./src/screens/MyCalendar";
import ChargePoint from "./src/screens/ChargePoint";
import Achievements from "./src/screens/Achievements";
import UserChat from "./src/screens/UserChat";

import socketService from "./src/helpers/SocketService";
import VirtualTree from "./src/screens/VirtualTree";

import { useFonts } from "expo-font";

const Stack = createStackNavigator();

export default function App({ t }) {
  // Por defecto, la funcionalidad de ver eventos está desactivada
  const defaultValues = async () => {
    try {
      await AsyncStorage.setItem("@showCulturalEvents", "false");
    } catch (e) {
      console.log(e);
    }
  };
  defaultValues();

  // Inicializa el socket de comunicacion por chat con el admin
  socketService.initializeSocket();
  const [fontsloaded, setFontsloaded] = useFonts({
    comfortaa: require("./assets/fonts/Comfortaa-Regular.ttf"),
    comfortaaBold: require("./assets/fonts/Comfortaa-Bold.ttf"),
  });

  if (!fontsloaded) return null;

  return (
    <EventProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>
          <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
          ></Stack.Screen>

          <Stack.Screen
            name="AccountRegister"
            component={AccountRegister}
          ></Stack.Screen>
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
          <Stack.Screen
            name="PassRecoverMail"
            component={PassRecoverMail}
          ></Stack.Screen>
          <Stack.Screen
            name="PassRecoverCodeConfirm"
            component={PassRecoverCodeConfirm}
          ></Stack.Screen>
          <Stack.Screen name="Filters" component={Filters}></Stack.Screen>
          <Stack.Screen name="SearchBar" component={SearchBar}></Stack.Screen>
          <Stack.Screen
            name="PasswordChange"
            component={PasswordChange}
          ></Stack.Screen>
          <Stack.Screen
            name="ConfirmCurrentPass"
            component={ConfirmCurrentPass}
          ></Stack.Screen>
          <Stack.Screen name="MyCalendar" component={MyCalendar}></Stack.Screen>
          <Stack.Screen
            name="ChargePoint"
            component={ChargePoint}
          ></Stack.Screen>
          <Stack.Screen
            name="Achievements"
            component={Achievements}
          ></Stack.Screen>
          <Stack.Screen name="UserChat" component={UserChat}></Stack.Screen>
          <Stack.Screen
            name="VirtualTree"
            component={VirtualTree}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}
