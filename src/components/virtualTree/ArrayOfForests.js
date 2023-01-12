import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import Forest from "./Forest";

export default function ArrayOfForests({ ntrees, ecopoints }) {
  const [first, setfirst] = useState(false);

  useEffect(() => {
    if (ntrees) setfirst(true);
  });

  return (
    first && (
      <ScrollView
        horizontal
        pagingEnabled
        nestedScrollEnabled
        showsHorizontalScrollIndicator={true}
      >
        {ntrees.map((arbres, index) => (
          <View key={index}>
            <Forest nArbres={arbres} ecoPoints={ecopoints} />
          </View>
        ))}
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({});
