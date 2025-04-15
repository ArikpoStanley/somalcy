import { Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  variant: "primary" | "secondary";
  onPress?: (event: GestureResponderEvent) => void;
  className?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, variant, onPress, className }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-full px-6 py-4 mt-5 ${variant === "primary" ? "bg-primary" : "bg-[#A7A7FF]"} ${className}`}
    >
      <Text className={`text-center font-semibold text-lg ${variant === "primary" ? "text-white" : "text-primary"} `}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
