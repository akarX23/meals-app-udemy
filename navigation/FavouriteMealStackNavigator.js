import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

const FavouriteMealsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? Colors.primary : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : Colors.accentColor,
        headerLeft: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item
              title="Drawer"
              iconName="ios-menu"
              onPress={() => navigation.toggleDrawer()}
            />
          </HeaderButtons>
        ),
      }}
    >
      <Stack.Screen name="Favorite" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavouriteMealsStack;
