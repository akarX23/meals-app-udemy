import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FilterScreeen from "../screens/FiltersScreen";
import { isAndroid } from "../helpers/utils";
import Colors from "../constants/Colors";
import CustomHeaderButton from "../components/HeaderButton";

const Stack = createNativeStackNavigator();

export default function FilterStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid() ? Colors.primary : "",
        },
        headerTintColor: isAndroid() ? "white" : Colors.accentColor,
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
      <Stack.Screen name="Filter" component={FilterScreeen} />
    </Stack.Navigator>
  );
}
