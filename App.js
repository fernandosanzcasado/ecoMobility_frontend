import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./src/screens/Profile";
import EditProfile from "./src/screens/EditProfile";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="EditProfile" component={EditProfile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
