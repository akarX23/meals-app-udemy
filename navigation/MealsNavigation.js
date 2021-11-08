import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

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

const formTabIcon = (iconName, focused) => {
  let color = focused ? Colors.accentColor : "black";

  return <Ionicons name={iconName} size={23} color={color} />;
};

const MealsTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => formTabIcon("restaurant", focused),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => formTabIcon("heart-sharp", focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigation;
