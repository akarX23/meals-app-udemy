import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import FavouriteMealsStack from "./FavouriteMealStackNavigator";
import MealsStackNavigator from "./MealStackNavigator";
import { isAndroid } from "../helpers/utils";
import Colors from "../constants/Colors";

const Tab = isAndroid
  ? createMaterialBottomTabNavigator()
  : createBottomTabNavigator();

const formTabIcon = (iconName, focused) => {
  let color = focused ? Colors.accentColor : "white";

  return <Ionicons name={iconName} size={23} color={color} />;
};

const getTabConfig = () =>
  isAndroid()
    ? {
        backBehavior: "history",
        shifting: true,
        activeColor: Colors.accentColor,
        inactiveColor: "white",
      }
    : {};

const MealsTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
      {...getTabConfig()}
      initialRouteName="Meals"
    >
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => formTabIcon("restaurant", focused),
          tabBarColor: Colors.primary,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouriteMealsStack}
        options={{
          tabBarIcon: ({ focused }) => formTabIcon("star", focused),
          tabBarColor: Colors.secondary,
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigation;
