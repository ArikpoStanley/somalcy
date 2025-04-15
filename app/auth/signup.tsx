import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../components/customInput';
import { router } from 'expo-router';

const Signup = () => {
  const [showNIN, setShowNIN] = useState(false);
  
  return (
    <View className="flex-1 p-6 bg-white">
      <View className="pt-8 pb-6">
        <TouchableOpacity className="border border-[#A7A7FF] mx-auto rounded-tr-full rounded-bl-full py-2 px-6 w-40 items-center">
          <Text className="text-[#A7A7FF] text-lg font-medium">Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <Text className="text-2xl font-bold mb-8 mx-auto ">Create your account</Text>
      
      <View className="mb-8">
        <Text className="text-gray-700 mb-2 font-semibold">Enter your NIN</Text>
        <View className="relative">
          <CustomInput 
            placeholder="e.g 1234567"
            secureTextEntry={!showNIN}
          />
          <TouchableOpacity 
            className="absolute right-4 top-3"
            onPress={() => setShowNIN(!showNIN)}
          >
            <Text className="text-gray-500">👁️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <TouchableOpacity className="bg-primary py-4 rounded-full items-center mb-8" onPress={() => router.navigate("/auth/nin")}>
        <Text className="text-white text-lg font-medium">Next</Text>
      </TouchableOpacity>
      
      <View className="flex flex-row justify-center">
        <Text className="text-gray-700 mr-1">Already have an account?</Text>
        <TouchableOpacity  onPress={() => router.navigate("/auth/login")}>
          <Text className="text-[#A7A7FF]">Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;