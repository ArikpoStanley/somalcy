import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { router } from 'expo-router';
const Password = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View className="flex-1 bg-white p-5">      
      <Text className="text-2xl font-bold mb-8 text-center">Create Password</Text>
      
      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Enter Password</Text>
        <View className="relative">
          <CustomInput 
            placeholder="********"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            className="absolute right-4 top-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text className="text-gray-500">👁️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Confirm Password</Text>
        <View className="relative">
          <CustomInput 
            placeholder="********"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            className="absolute right-4 top-4"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text className="text-gray-500">👁️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Text className="text-gray-700">(Password should not be less than 8 characters)</Text>
      
      <CustomButton variant='primary' title='Proceed' onPress={()=> router.navigate("/auth/complete")} />
      
    </View>
  );
};

export default Password;