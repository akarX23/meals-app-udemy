import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function CategoryGridItem({ title, color, onPress }) {
  return (
    <TouchableOpacity
      style={tw.style(`flex-1 m-3 p-2 rounded-lg h-32 justify-end items-end`, {
        backgroundColor: color,
        elevation: 10,
      })}
      onPress={onPress}
    >
      <View>
        <Text
          style={tw.style(`text-base text-right`, {
            fontFamily: "open-sans-bold",
          })}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
