import React from "react";
import { View, Text } from "react-native";

const CustomText = ({ bold, style, ...rest }) => {
  return (
    <Text
      style={{
        fontFamily: bold ? "open-sans-bold" : "open-sans",
        ...style,
      }}
      {...rest}
    ></Text>
  );
};

export default CustomText;
