import React, { useEffect } from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({ navigation }) => {
  const meals = MEALS.filter((item, i) => i < 5);

  useEffect(() => {
    navigation.setOptions({
      title: "Favourite Meals!",
    });
  }, []);

  return <MealList listData={meals} navigation={navigation} />;
};

export default FavoritesScreen;
