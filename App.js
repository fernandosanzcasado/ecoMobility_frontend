import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";
import MapScreen from "./src/screens/MapScreen";

import AccountRegister from "./src/screens/AccountRegister";
import Login from "./src/screens/Login";
import PasswordRecover from "./src/screens/PasswordRecover";
import PasswordRecover2 from "./src/screens/PasswordRecover2";
import PasswordChange from "./src/screens/PasswordChange";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MapScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MapScreen" component={MapScreen}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
        <Stack.Screen
          name="AccountRegister"
          component={AccountRegister}
        ></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen
          name="PasswordRecover"
          component={PasswordRecover}
        ></Stack.Screen>
        <Stack.Screen
          name="PasswordRecover2"
          component={PasswordRecover2}
        ></Stack.Screen>
        <Stack.Screen
          name="PasswordChange"
          component={PasswordChange}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
