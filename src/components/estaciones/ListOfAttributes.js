import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Card } from "react-native-paper";

export default function ListOfAttributes({ estacion }) {
  return (
    <View>
      <List.Section title="Datos Estacion: ">
        <List.Accordion
          title="Aspectos técnicos"
          left={(props) => (
            <List.Icon {...props} icon="book-information-variant" />
          )}
        >
          <Card>
            <Card.Content>
              <Text style={styles.Atributo}>
                Tipus Vehícle: {estacion.tipoVehiculo}
              </Text>
              <Text>Tipus Corrent: {estacion.tipoCorriente}</Text>
              <Text>Tipus Conexió: {estacion.tipoConexion}</Text>
              <Text>Tipus Velocitat: {estacion.tipoVelocidad}</Text>
              <Text>Potencia: {estacion.potencia}</Text>
              <Text>Nombre Places: {estacion.nPlazas}</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Ubicación :"
          left={(props) => <List.Icon {...props} icon="map-marker-radius" />}
        >
          <Card>
            <Card.Content>
              <Text>Província: {estacion.provincia}</Text>
              <Text>Municipi: {estacion.municipio}</Text>
              <Text>Codi Província: {estacion.codiProv}</Text>
              <Text>
                Longitud y Latitud: {estacion.longitud} {estacion.latitud}{" "}
              </Text>
            </Card.Content>
          </Card>
        </List.Accordion>
        <List.Accordion
          title="Promotor: "
          left={(props) => <List.Icon {...props} icon="tools" />}
        >
          <Card>
            <Card.Content>
              <Text>Promotor: {estacion.promotor}</Text>
            </Card.Content>
          </Card>
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  Atributo: {
    fontSize: 15,
  },
});
