import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      title: "Filter Meals",
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>The Filters Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
