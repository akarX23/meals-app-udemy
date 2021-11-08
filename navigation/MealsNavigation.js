import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.accentColor,
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const MealsTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={MealsStackNavigator} />
      <Tab.Screen name="Favourites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default MealsTabNavigation;
