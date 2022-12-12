import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NUMSTARS = 5;

export default function Rating() {
  //Si el user entra por primera vez rating = 0
  //Una vez entra se le guarda el rating que quiera establecer
  const [userrating, setUserRating] = useState(0);
  const [saveButton, setSaveButton] = useState(false);

  //RATING QUE ES GUARDARÀ  A LA BD, FER UN UseEffect cada cop que s'actualitzi
  //aquesta variable i enviar les dades a la BD
  const [defrating, setDefRating] = useState();

  let stars = [];

  for (let i = 1; i <= NUMSTARS; ++i) {
    stars.push(
      <TouchableWithoutFeedback
        key={i}
        onPress={() => {
          setUserRating(i);
          setSaveButton(true);
        }}
      >
        <Animated.View>
          <Icon
            name={i <= userrating ? "star" : "star-o"}
            color="yellow"
            size={32}
            style={{ marginHorizontal: 6 }}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }

  return (
    <View style={styles.struct}>
      <View style={styles.stars}>{stars}</View>
      {saveButton && (
        <TouchableWithoutFeedback
          onPress={() => {
            setDefRating(userrating);
            setSaveButton(false);
          }}
        >
          <View style={styles.button}>
            <Text style={styles.text}>Save Rating</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
  },
  struct: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#EEF3F1",
    width: 100,
    height: 25,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 2,
  },
  text: {
    FontSize: 20,
    alignSelf: "center",
  },
});
