import React from "react";
import { FlatList } from "react-native";
import tw from "tailwind-react-native-classnames";

import MealItem from "./MealItem";

const MealList = ({ listData, navigation }) => {
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
    <FlatList
      data={listData}
      keyExtractor={(item) => item.id}
      renderItem={renderMeal}
      style={tw`w-full px-3 pt-4`}
    />
  );
};

export default MealList;
