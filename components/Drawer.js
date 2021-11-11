import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tw from "tailwind-react-native-classnames";

import testImg from "../assets/app-plan-meals-app.png";
import Colors from "../constants/Colors";

const Drawer = (props) => {
  const renderDrawerItem = (label, screen, icon) => (
    <DrawerItem
      label={({ color, focused }) => (
        <Text
          style={tw.style(`text-lg`, {
            color: focused ? Colors.accentColor : color,
          })}
        >
          {label}
        </Text>
      )}
      onPress={() => props.navigation.navigate(screen)}
      icon={({ size, color, focused }) => (
        <Ionicons
          name={icon}
          size={size}
          color={focused ? Colors.accentColor : color}
        />
      )}
      style={tw.style(`w-full px-3 justify-center`)}
      focused={
        props.state.index ===
        props.state.routes.findIndex((e) => e.name === screen)
      }
    />
  );

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={tw.style(`items-center`)}
    >
      <View style={tw`flex-1 w-full h-full`}>
        <View
          style={tw.style(`border-b border-gray-500 items-center pt-12 pb-8`)}
        >
          <ImageBackground
            source={testImg}
            style={tw.style(`w-2/5 bg-gray-500 rounded-full overflow-hidden`, {
              aspectRatio: 1 / 1,
            })}
            resizeMode="cover"
          />
          <Text
            style={tw.style(`font-bold text-lg text-black my-2`, {
              fontFamily: "open-sans-bold",
            })}
          >
            Ritik Agrawal
          </Text>
          <Text style={tw.style({ fontFamily: "open-sans" })}>
            12 / 09 / 2000
          </Text>
        </View>
      </View>
      {renderDrawerItem("Meals", "FavMeals", "restaurant")}
      {renderDrawerItem("Filter", "Filters", "funnel-sharp")}
    </DrawerContentScrollView>
  );
};

export default Drawer;
