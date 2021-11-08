import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function MealItem({ onSelect, data }) {
  return (
    <View
      style={tw`w-full h-56 m-2 my-4 self-center rounded-lg overflow-hidden bg-gray-300`}
    >
      <TouchableOpacity onPress={onSelect} style={tw`flex-1`}>
        <View style={tw`flex-1`}>
          <View style={tw.style(`w-full h-5/6 items-center justify-start`)}>
            <ImageBackground
              source={{ uri: data.imageUrl }}
              style={tw.style(`justify-end w-full h-full`)}
            >
              <Text
                style={tw.style(
                  `text-xl bg-black bg-opacity-50 py-1 px-2 text-white rounded-sm text-center`,
                  {
                    fontFamily: "open-sans-bold",
                  }
                )}
                numberOfLines={1}
              >
                {data.title}
              </Text>
            </ImageBackground>
          </View>
          <View
            style={tw.style(`flex-row justify-between p-2 flex-1 bg-gray-300`)}
          >
            <Text
              style={tw.style(`font-medium `, {
                fontFamily: "open-sans",
              })}
            >
              {data.duration}
            </Text>
            <Text
              style={tw.style(`font-medium `, {
                fontFamily: "open-sans",
              })}
            >
              {data.complexity}
            </Text>
            <Text
              style={tw.style(`font-medium `, {
                fontFamily: "open-sans",
              })}
            >
              {data.affordability}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
