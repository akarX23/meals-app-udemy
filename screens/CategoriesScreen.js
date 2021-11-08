import React from "react";
import { FlatList, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import CategoryGridItem from "../components/CategoryGridItem";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridItem
        {...item}
        onPress={() =>
          navigation.navigate("CategoryMeals", {
            categoryId: item.id,
          })
        }
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;
