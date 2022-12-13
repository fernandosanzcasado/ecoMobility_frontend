import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { List, Card } from "react-native-paper";
import Slider from "@react-native-community/slider";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/FontAwesome";

import LogoText from "../components/ecomobility/LogoText";

export default function FilterScreen({ navigation }) {
  [bicicletes, setBicicletes] = useState(false);
  [vehicles, setVehicles] = useState(false);
  [supercharge, setSupercharge] = useState(false);
  [preu, setPreu] = useState(false);
  [range, setRange] = useState(5);
  [apply, setApply] = useState(false);

  const { t } = useTranslation();

  return (
    <ScrollView>
      <SafeAreaView style={styles.capcalera}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrow-left"
            size={Constants.statusBarHeight / 1.5}
            color="#FFFFFF"
            style={{ marginLeft: Constants.statusBarHeight }}
          ></Icon>
        </TouchableOpacity>
        <View style={styles.logo}>
          <LogoText />
        </View>
      </SafeAreaView>
      <List.Section title="Filtrar Por: ">
        <List.Accordion
          title="Tipo de Corriente"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text>AC</Text>
              <Text>DC</Text>
              <Text>AC-DC</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Tipo de Velocidad"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text>RAPID</Text>
              <Text>semiRAPID</Text>
              <Text>NORMAL</Text>
              <Text>superRapid</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Tipo de Vehículo"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text>cotxe</Text>
              <Text>moto</Text>
              <Text>taxi</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Tipo de Conexion"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text>TESLA</Text>
              <Text>schuko</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  capcalera: {
    backgroundColor: "#2D803F",
    display: "flex",
    flexDirection: "row",
    height: 150,
  },
  logo: {
    display: "flex",
    marginLeft: Constants.statusBarHeight * 2,
    marginVertical: Constants.statusBarHeight,
  },
});
