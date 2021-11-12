import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FilterStackNavigator from "./FilterStackNavigator";
import MealsTabNavigation from "./MealTabNavigator";
import Colors from "../constants/Colors";
import CustomDrawer from "../components/Drawer";

const Drawer = createDrawerNavigator();

export default function MealDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.accentColor,
        drawerInactiveTintColor: "black",
        drawerType: "back",
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="FavMeals"
        component={MealsTabNavigation}
        options={{
          title: "Meals",
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={FilterStackNavigator}
        options={{
          title: "Filters",
        }}
      />
    </Drawer.Navigator>
  );
}
