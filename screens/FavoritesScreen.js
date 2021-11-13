import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const FavoritesScreen = ({ navigation }) => {
  const { all_meals, fav_meals } = useSelector((state) => state.meal);

  useEffect(() => {
    navigation.setOptions({
      title: "Favourite Meals!",
    });
  }, []);

  return <MealList listData={fav_meals} navigation={navigation} />;
};

export default FavoritesScreen;
