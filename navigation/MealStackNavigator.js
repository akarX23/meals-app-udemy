import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

const MealStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
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
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MealStackNavigator;
