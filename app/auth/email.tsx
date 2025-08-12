import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../components/customInput';
import { router } from 'expo-router';

const Email = () => {  
  return (
    <View className="flex-1 p-6 bg-white pt-32">
      <View className="mb-8">
        <Text className="text-gray-700 mb-2 font-semibold">Enter your Email Address</Text>
        <View className="relative">
          <CustomInput 
            placeholder="john@gmail.com"
          />
        </View>
      </View>
      
      <TouchableOpacity className="bg-primary py-4 rounded-full items-center mb-8" onPress={() => router.navigate("/auth/otp")}>
        <Text className="text-white text-lg font-medium">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Email;