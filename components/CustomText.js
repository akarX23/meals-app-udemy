import React from "react";
import { View, Text } from "react-native";

const CustomText = ({ bold, style, children, ...rest }) => {
  return (
    <Text
      style={{
        fontFamily: bold ? "open-sans-bold" : "open-sans",
        ...style,
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default CustomText;
