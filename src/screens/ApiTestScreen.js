import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import axios from "axios";

export default function ApiTestScreen() {
  const [prueba, setPrueba] = useState([]);
  useEffect(() => {
    async function getTest() {
      try {
        const testLocal = await axios.get(
          "http://10.0.2.2:3000/api/v1/users/eabb941f-cd7f-471a-9034-d649ed82a7a3"
        );
        console.log(testLocal.data);
        setPrueba(testLocal.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTest();
  }, []);
  return (
    <SafeAreaView>
      <Text>{prueba.Id}</Text>
    </SafeAreaView>
  );
}
