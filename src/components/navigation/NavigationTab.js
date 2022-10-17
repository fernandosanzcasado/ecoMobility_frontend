import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PruebaScreen from "../../screens/PruebaScreen";
import UserScreen from "../../screens/UserScreen";
import MapScreen from "../../screens/MapScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Prueba" component={PruebaScreen} />
      <Tab.Screen name="Usuario" component={UserScreen} />
    </Tab.Navigator>
  );
}
