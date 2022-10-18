import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";
import MapScreen from "./src/screens/MapScreen";
import Toolbar from "./src/components/ecomobility/Toolbar";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
