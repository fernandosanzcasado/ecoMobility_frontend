import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { EventProvider } from "react-native-outside-press";

import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";
import MapScreen from "./src/screens/MapScreen";

import AccountRegister from "./src/screens/AccountRegister";
import Login from "./src/screens/Login";
import PassRecoverMail from "./src/screens/PassRecoverMail";
import PassRecoverCodeConfirm from "./src/screens/PassRecoverCodeConfirm";
import PasswordChange from "./src/screens/PasswordChange";
import ApiTestScreen from "./src/screens/ApiTestScreen";
import Filters from "./src/screens/Filters";
import SearchBar from "./src/screens/SearchBar";
import ConfirmCurrentPass from "./src/screens/ConfirmCurrentPass";
import MyCalendar from "./src/screens/MyCalendar";
import ChargePoint from "./src/screens/ChargePoint";
import socketService from "./src/helpers/SocketService";

const Stack = createStackNavigator();

export default function App({ t }) {
  socketService.initializeSocket();
  return (
    <EventProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MapScreen"
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

          {/* TEST API #################################################### */}

          <Stack.Screen
            name="ApiTestScreen"
            component={ApiTestScreen}
          ></Stack.Screen>

          {/* TEST API */}

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
        </Stack.Navigator>
      </NavigationContainer>
    </EventProvider>
  );
}
