// In App.js in a new project

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import Colors from "./constants/Colors";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Platform } from "react-native";
import { enableScreens } from "react-native-screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

function MealTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meals" component={CategoriesScreen} />
      <Tab.Screen name="Favourites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={() => {
          console.log(error);
          setFontLoaded(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default App;
