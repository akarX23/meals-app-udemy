import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import tw from "tailwind-react-native-classnames";
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";

import CustomHeaderButton from "../components/HeaderButton";
import { toggleFavouriteMeal } from "../actions/meals";

const MealDetailScreen = ({ navigation, route: { params } }) => {
  const mealId = params.mealId;

  const { all_meals, fav_meals } = useSelector((state) => state.meal);
  const dispatch = useDispatch();

  const meal = all_meals.find((meal) => meal.id === mealId);
  const isFav = fav_meals.find((meal) => meal.id === mealId);

  useEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Favourite"
            iconName={isFav ? "ios-star" : "ios-star-outline"}
            onPress={() => dispatch(toggleFavouriteMeal(mealId))}
          />
        </HeaderButtons>
      ),
    });
  }, [params, fav_meals]);

  const renderIngredient = (item) => (
    <View style={tw.style(`flex-row my-1 flex-1 items-center`)} key={item}>
      <Text style={tw`text-2xl`}>{"\u2022"}</Text>
      <Text
        style={tw.style(`flex-1 pl-4 text-lg`, { fontFamily: "open-sans" })}
      >
        {item}
      </Text>
    </View>
  );

  const renderDishBoolean = (isValue, label) => (
    <View style={tw.style(`flex-row items-center mr-1`)}>
      {isValue ? (
        <MaterialIcons name={"verified"} size={22} color="green" />
      ) : (
        <Entypo name="circle-with-cross" size={22} color="red" />
      )}
      <Text
        style={tw.style(`pl-2 text-black my-2`, {
          fontFamily: "open-sans-bold",
        })}
      >
        {label}
      </Text>
    </View>
  );

  return (
    <View style={tw`pb-4`}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={tw.style(`w-full h-full bg-gray-200`, {
          maxHeight: 200,
        })}
        resizeMethod="scale"
        resizeMode="cover"
      />
      <View style={tw.style(`flex-1 px-3 mt-3`)}>
        <Text
          style={tw.style(`text-2xl text-black mb-2`, {
            fontFamily: "open-sans-bold",
          })}
        >
          {meal.title}
        </Text>
        <View style={tw.style(`flex-row items-center w-full my-2`)}>
          <View style={tw.style(`flex-row items-center`)}>
            <Ionicons name="timer-outline" size={22} />
            <Text style={tw.style(`pl-2 text-lg`, { fontFamily: "open-sans" })}>
              {meal.duration} mins
            </Text>
          </View>
          <View style={tw.style(`flex-row items-center ml-6`)}>
            <MaterialIcons name="hardware" size={22} />
            <Text style={tw.style(`pl-2 text-lg`, { fontFamily: "open-sans" })}>
              {meal.complexity}
            </Text>
          </View>
        </View>
        <View style={tw.style(`flex-row justify-between flex-wrap`)}>
          {renderDishBoolean(meal.isGlutenFree, "Gluten Free")}
          {renderDishBoolean(meal.isLactoseFree, "Lactose Free")}
          {renderDishBoolean(meal.isVegetarian, "Vegetarian")}
        </View>
        <ScrollView style={tw`flex-1`}>
          <Text
            style={tw.style(`text-lg mt-2`, { fontFamily: "open-sans-bold" })}
          >
            Ingredients:
          </Text>
          {meal.ingredients.map((item) => renderIngredient(item))}
        </ScrollView>
      </View>
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
