import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealScreen = ({ navigation, route: { params } }) => {
  const catId = params.categoryId;
  const slectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const mealsToDisplay = MEALS.filter(
    (meal) => !meal.catgoryIds.includes(catId)
  );

  useEffect(() => {
    navigation.setOptions({
      title: slectedCategory.title,
    });
  }, [params]);

  return (
    <View style={styles.screen}>
      <MealList listData={mealsToDisplay} navigation={navigation} />
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

export default CategoryMealScreen;
