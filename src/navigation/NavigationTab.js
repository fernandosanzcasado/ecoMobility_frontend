import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mapa from "../../Components/Maps"
import PruebaScreen from "../screens/PruebaScreen";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Mapa" component={Mapa} />
            <Tab.Screen name="Prueba" component={PruebaScreen} />
        </Tab.Navigator>
    )
}