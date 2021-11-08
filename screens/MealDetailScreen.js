import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const MealDetailScreen = ({ navigation, route: { params } }) => {
  const mealId = params.mealId;

  const meal = MEALS.find((meal) => meal.id === mealId);
  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favourite"
            iconName="ios-star"
            onPress={() => alert("Mark as favourite")}
          />
        </HeaderButtons>
      ),
    });
  }, [params]);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
      <Button title="Go to top" onPress={() => navigation.popToTop()} />
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

export default MealDetailScreen;
