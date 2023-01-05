import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { List, Card, Switch, TextInput } from "react-native-paper";
import Slider from "@react-native-community/slider";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/FontAwesome";

import LogoText from "../components/ecomobility/LogoText";

import paramsList from "../helpers/ParamsMapCall";

export default function FilterScreen({ navigation }) {
  //Tipo de Corriente
  const [ac, setAc] = useState(true);
  const [dc, setDc] = useState(true);
  //Tipo de Velocidad
  const [rapid, setRapid] = useState(true);
  const [semirapid, setSemiRapid] = useState(true);
  const [normal, setNormal] = useState(true);
  const [superrapid, setSuperRapid] = useState(true);
  //Tipo de Vehículo
  const [cotxe, setCotxe] = useState(true);
  const [moto, setMoto] = useState(true);
  const [taxi, setTaxi] = useState(true);
  const [mercaderies, setMercaderies] = useState(true);
  //Tipo de Conexión
  const [range, setRange] = useState(10);
  const [apply, setApply] = useState(false);

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
      <View style={styles.content}>
        <List.Section title="Filtrar por: ">
          <List.Accordion
            title="Tipo de Corriente"
            left={(props) => (
              <List.Icon {...props} icon="book-information-variant" />
            )}
          >
            <Card>
              <Card.Content>
                <View style={styles.button}>
                  <Text style={styles.textButton}>AC</Text>
                  <Switch value={ac} onValueChange={() => setAc(!ac)} />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>DC</Text>
                  <Switch value={dc} onValueChange={() => setDc(!dc)} />
                </View>
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
                <View style={styles.button}>
                  <Text style={styles.textButton}>Rapid</Text>
                  <Switch
                    value={rapid}
                    onValueChange={() => setRapid(!rapid)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>SemiRapid</Text>
                  <Switch
                    value={semirapid}
                    onValueChange={() => setSemiRapid(!semirapid)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Normal</Text>
                  <Switch
                    value={normal}
                    onValueChange={() => setNormal(!normal)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>SuperRapid</Text>
                  <Switch
                    value={superrapid}
                    onValueChange={() => setSuperRapid(!superrapid)}
                  />
                </View>
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
                <View style={styles.button}>
                  <Text style={styles.textButton}>Cotxe</Text>
                  <Switch
                    value={cotxe}
                    onValueChange={() => setCotxe(!cotxe)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Moto</Text>
                  <Switch value={moto} onValueChange={() => setMoto(!moto)} />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Taxi</Text>
                  <Switch value={taxi} onValueChange={() => setTaxi(!taxi)} />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Mercaderies</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
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
                <View style={styles.button}>
                  <Text style={styles.textButton}>Tesla</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Schuko</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Mennekes</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>ccsCombo</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>chadeMo</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>J1772F</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
              </Card.Content>
            </Card>
          </List.Accordion>
          <List.Accordion
            title="Potencia"
            left={(props) => (
              <List.Icon {...props} icon="book-information-variant" />
            )}
          >
            <Card>
              <Card.Content>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Potencia mínima: </Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="MinPow"
                    maxLength={2}
                  />
                </View>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Card>
            <Card.Title title="Distancia en Km: " />
            <Card.Content style={{ flexDirection: "row" }}>
              <Slider
                style={{ width: 300 }}
                minimumValue={1}
                maximumValue={20}
                minimumTrackTintColor="#60F4B9"
                maximumTrackTintColor="#000000"
                value={range}
                onValueChange={(value) => setRange(parseInt(value))}
              />
              <Text>{range} Km</Text>
            </Card.Content>
          </Card>
        </List.Section>
      </View>
      <TouchableOpacity
        style={styles.buttonapply}
        onPress={() => {
          setApply(!apply);
          //ACTUALIZAR PARAMETROS DE PARAMSMAPCALL
          paramsList.setParams({
            tipoCorriente: null,
            tipoVelocidad: null,
            tipoVehiculo: "moto",
            tipoConexion: "ccs combo",
            potencia: null,
            distancia: null,
          });

          navigation.navigate("MapScreen", { update: Math.random() });
        }}
      >
        <Text style={styles.buttonTxt}>{t("Filters.Apply_Filters")}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  buttonapply: {
    marginTop: 30,
    backgroundColor: "#2D803F",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginLeft: Constants.statusBarHeight,
    marginRight: Constants.statusBarHeight,
  },
  buttonTxt: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  capcalera: {
    backgroundColor: "#2D803F",
    display: "flex",
    flexDirection: "row",
  },
  content: {
    marginVertical: Constants.statusBarHeight,
  },
  logo: {
    display: "flex",
    marginLeft: Constants.statusBarHeight * 2,
    marginVertical: Constants.statusBarHeight / 2.5,
  },
  textButton: {
    alignSelf: "center",
    marginRight: Constants.statusBarHeight,
  },
});
