import React, { useEffect } from "react";
import { View, StyleSheet, Switch } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { changeFilteredMeals, toggleFilterSettings } from "../actions/filters";

import CustomText from "../components/CustomText";
import Colors from "../constants/Colors";
import { isAndroid } from "../helpers/utils";

const FiltersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isGlutenFree, isLactoseFree, isVegetarian } = useSelector(
    (state) => state.filters
  );
  const { all_meals } = useSelector((state) => state.meal);

  useEffect(() => {
    navigation.setOptions({
      title: "Filter Meals",
    });
  }, []);

  useEffect(() => {
    let filteredMeals = all_meals.filter((meal) => {
      let keepMeal = false;

      if (
        ((isLactoseFree && meal.isLactoseFree) || !isLactoseFree) &&
        ((isGlutenFree && meal.isGlutenFree) || !isGlutenFree) &&
        ((isVegetarian && meal.isVegetarian) || !isVegetarian)
      )
        keepMeal = true;

      return keepMeal;
    });

    dispatch(changeFilteredMeals(filteredMeals));
  }, [isGlutenFree, isLactoseFree, isVegetarian]);

  const renderFilter = (label, value, key) => (
    <View style={tw`flex-row justify-between px-3 my-5 items-center w-full`}>
      <CustomText style={tw`text-lg`}>{label}</CustomText>
      <Switch
        value={value}
        onChange={() => dispatch(toggleFilterSettings(key))}
        trackColor={{ true: Colors.primary, false: "gray" }}
        thumbColor={isAndroid() ? Colors.primary : ""}
      />
    </View>
  );

  return (
    <View style={tw.style(`flex-1`)}>
      <CustomText
        bold
        style={tw.style(`w-full p-2 bg-gray-200 text-center text-xl`)}
      >
        Available filters
      </CustomText>
      {renderFilter("Gluten Free", isGlutenFree, "isGlutenFree")}
      {renderFilter("Lcatose Free", isLactoseFree, "isLactoseFree")}
      {renderFilter("Vegetarian", isVegetarian, "isVegetarian")}
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
