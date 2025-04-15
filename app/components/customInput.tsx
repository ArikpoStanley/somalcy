import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";

type CustomInputProps = TextInputProps & {
  label?: string;
  error?: string;
  className?: string; // Allows passing Tailwind styles
};

const CustomInput: React.FC<CustomInputProps> = ({ label, error, className, ...props }) => {
  return (
    <View className="w-full mb-4">
      {label && <Text className="text-gray-700 mb-2 font-semibold ">{label}</Text>}

      <TextInput
        className={`border border-gray-300 rounded-lg px-4 py-3 h-12 text-base bg-gray-200 ${className}`}
        placeholderTextColor="#999"
        {...props}
      />

      {error && <Text className="text-red-500 mt-1 text-sm">{error}</Text>}
    </View>
  );
};

export default CustomInput;
