import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import "../../i18n.js";

import { List, Card, Switch, TextInput } from "react-native-paper";
import Slider from "@react-native-community/slider";
import Constants from "expo-constants";
import { useTranslation } from "react-i18next";
import Icon from "react-native-vector-icons/FontAwesome";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LogoText from "../components/ecomobility/LogoText";

import paramsList from "../helpers/ParamsMapCall";

var buttonsState = {
  ac: true,
  dc: true,
  rapid: true,
  semirapid: true,
  normal: true,
  superrapid: true,
  cotxe: true,
  moto: true,
  taxi: true,
  mercaderies: true,
  ccscombo2: true,
  chademo: true,
  tesla: true,
  mennekes: true,
  j1772f: true,
  schuko: true,
  power: 50,
  distancia: 10,
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("@buttonsData");
    if (value !== null) buttonsState = value;
  } catch (e) {
    console.log(e);
  }
};

const storeData = async () => {
  try {
    const jsonValue = JSON.stringify(buttonsState);
    await AsyncStorage.setItem("@buttonsData", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export default function FilterScreen({ navigation }) {
  useEffect(() => {
    getData();
  }, []);

  //Tipo de Corriente
  const [ac, setAc] = useState(buttonsState.ac);
  const [dc, setDc] = useState(buttonsState.dc);
  //Tipo de Velocidad
  const [rapid, setRapid] = useState(buttonsState.rapid);
  const [semirapid, setSemiRapid] = useState(buttonsState.semirapid);
  const [normal, setNormal] = useState(buttonsState.normal);
  const [superrapid, setSuperRapid] = useState(buttonsState.superrapid);
  //Tipo de Vehículo
  const [cotxe, setCotxe] = useState(buttonsState.cotxe);
  const [moto, setMoto] = useState(buttonsState.moto);
  const [taxi, setTaxi] = useState(buttonsState.taxi);
  const [mercaderies, setMercaderies] = useState(buttonsState.mercaderies);
  //Tipo de Conexión
  const [ccscombo2, setCcsCombo2] = useState(buttonsState.ccscombo2);
  const [chademo, setChadeMo] = useState(buttonsState.chademo);
  const [tesla, setTesla] = useState(buttonsState.tesla);
  const [mennekes, setMennekes] = useState(buttonsState.mennekes);
  const [j1772f, setJ1772F] = useState(buttonsState.j1772f);
  const [schuko, setSchuko] = useState(buttonsState.schuko);
  //Potencia
  const [power, setPower] = useState(buttonsState.power);
  //Distància
  const [distancia, setDistancia] = useState(buttonsState.distancia);

  //FUTBOL LA RIOJA
  const generateStrings = (boolsAndStrings, separator) => {
    var first = true;
    var resultString = "";
    boolsAndStrings.forEach((item) => {
      if (item.bool) {
        if (first) {
          first = false;
        } else {
          resultString += separator;
        }
        resultString += item.string;
      }
    });
    console.log("RESULT : " + resultString);
    return resultString;
  };

  const computeParams = () => {
    // Parametro en string del tipo de corriente (por defecto null)
    let paramTipoCorriente = ac ? (dc ? "AC-DC" : "AC") : dc ? "DC" : null;

    // Parametro en string del tipo de corriente (por defecto null)
    let paramTipoVelocidad = generateStrings(
      [
        { bool: rapid, string: "RAPID" },
        { bool: semirapid, string: "semiRAPID" },
        { bool: normal, string: "NORMAL" },
        { bool: superrapid, string: "superRAPID" },
      ],
      " i "
    );
    console.log("TIPOVELOCIDAD");
    console.log(paramTipoVelocidad);
    //RAPID/SUPERAPID/

    // Parametro en string del tipo de corriente (por defecto null)
    let paramTipoVehiculo = generateStrings(
      [
        { bool: mercaderies, string: "truck" },
        { bool: moto, string: "motorbike" },
        { bool: cotxe, string: "car" },
        { bool: taxi, string: "taxi" },
      ],
      " i "
    );
    console.log("TIPOVEHICULO");
    console.log(paramTipoVehiculo);

    // Parametro en string del tipo de corriente (por defecto null)
    let paramTipoConexion = generateStrings(
      [
        { bool: ccscombo2, string: "CCS Combo2" },
        { bool: chademo, string: "ChadeMO" },
        { bool: tesla, string: "TESLA" },
        { bool: mennekes, string: "MENNEKES.M" },
        { bool: j1772f, string: "J1772.F" },
        { bool: schuko, string: "Schuko" },
      ],
      "+"
    );
    console.log("TIPOCONEXION");
    console.log(paramTipoConexion);
    // Parametro en string del tipo de corriente (por defecto null)
    let paramPotencia = power;
    console.log("POTENCIA");
    console.log(paramPotencia);
    // Parametro en string del tipo de corriente (por defecto null)
    let paramDistancia = distancia;
    console.log("DISTANCIA");
    console.log(paramDistancia);
    // Pasamos las strings a nuestra instancia de la clase ParamsMapCall
    paramsList.setParams({
      tipoCorriente: null,
      tipoVelocidad: null,
      tipoVehiculo: "moto",
      tipoConexion: null,
      potencia: null,
      distancia: null,
    });

    buttonsState = {
      ac: ac,
      dc: dc,
      rapid: rapid,
      semirapid: semirapid,
      normal: normal,
      superrapid: superrapid,
      cotxe: cotxe,
      moto: moto,
      taxi: taxi,
      mercaderies: mercaderies,
      ccscombo2: ccscombo2,
      chademo: chademo,
      tesla: tesla,
      mennekes: mennekes,
      j1772f: j1772f,
      schuko: schuko,
      power: power,
      distancia: distancia,
    };
    storeData();
  };

  const { t, i18n } = useTranslation();

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
        <List.Section title={t("Filters.Filter_by")}>
          <List.Accordion
            title={t("Filters.Type_Electricity")}
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
            title={t("Filters.Type_Velocity")}
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
            title={t("Filters.Type_Vehicle")}
            left={(props) => (
              <List.Icon {...props} icon="book-information-variant" />
            )}
          >
            <Card>
              <Card.Content>
                <View style={styles.button}>
                  <Text style={styles.textButton}>{t("Filters.Car")}</Text>
                  <Switch
                    value={cotxe}
                    onValueChange={() => setCotxe(!cotxe)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>{t("Filters.Moto")}</Text>
                  <Switch value={moto} onValueChange={() => setMoto(!moto)} />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Taxi</Text>
                  <Switch value={taxi} onValueChange={() => setTaxi(!taxi)} />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>{t("Filters.Truck")}</Text>
                  <Switch
                    value={mercaderies}
                    onValueChange={() => setMercaderies(!mercaderies)}
                  />
                </View>
              </Card.Content>
            </Card>
          </List.Accordion>
          <List.Accordion
            title={t("Filters.Type_Conection")}
            left={(props) => (
              <List.Icon {...props} icon="book-information-variant" />
            )}
          >
            <Card>
              <Card.Content>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Tesla</Text>
                  <Switch
                    value={tesla}
                    onValueChange={() => setTesla(!tesla)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Schuko</Text>
                  <Switch
                    value={schuko}
                    onValueChange={() => setSchuko(!schuko)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>Mennekes</Text>
                  <Switch
                    value={mennekes}
                    onValueChange={() => setMennekes(!mennekes)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>ccsCombo</Text>
                  <Switch
                    value={ccscombo2}
                    onValueChange={() => setCcsCombo2(!ccscombo2)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>chadeMo</Text>
                  <Switch
                    value={chademo}
                    onValueChange={() => setChadeMo(!chademo)}
                  />
                </View>
                <View style={styles.button}>
                  <Text style={styles.textButton}>J1772F</Text>
                  <Switch
                    value={j1772f}
                    onValueChange={() => setJ1772F(!j1772f)}
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
                  <Text style={styles.textButton}>{t("Filters.Kw")} </Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="MinPow"
                    maxLength={2}
                    onChangeText={(text) => setPower(parseInt(text))}
                  />
                </View>
              </Card.Content>
            </Card>
          </List.Accordion>
          <Card>
            <Card.Title title={t("Filters.Distance")} />
            <Card.Content style={{ flexDirection: "row" }}>
              <Slider
                style={{ width: 300 }}
                minimumValue={10}
                maximumValue={20}
                minimumTrackTintColor="#60F4B9"
                maximumTrackTintColor="#000000"
                value={distancia}
                onValueChange={(value) => setDistancia(parseInt(value))}
              />
              <Text>{distancia} Km</Text>
            </Card.Content>
          </Card>
        </List.Section>
      </View>
      <TouchableOpacity
        style={styles.buttonapply}
        onPress={() => {
          computeParams();
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
