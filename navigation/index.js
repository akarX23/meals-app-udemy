import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MealDrawerNavigator from "./MealDrawerNavigator";

const CombineNavigators = () => {
  return (
    <NavigationContainer>
      <MealDrawerNavigator />
    </NavigationContainer>
  );
};

export default CombineNavigators;
