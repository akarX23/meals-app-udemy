import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import MealItem from "../components/MealItem";
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

  const renderMeal = ({ item }) => (
    <MealItem
      onSelect={() =>
        navigation.navigate("MealDetail", {
          mealId: item.id,
        })
      }
      data={item}
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
        style={tw`w-full px-3 pt-4`}
      />
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
