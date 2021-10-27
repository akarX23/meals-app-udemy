import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Meal Categories",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.accentColor,
    });
  }, [navigation]);

  const renderGridItem = ({ item: { color, id, title } }) => {
    // console.log(itemData);
    return (
      <TouchableOpacity
        style={tw`m-4 bg-green-400 p-2 flex-1`}
        onPress={() => navigation.navigate("MealDetail")}
      >
        <View>
          <Text>{color}</Text>
          <Text>{title}</Text>
          <Text>{id}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
