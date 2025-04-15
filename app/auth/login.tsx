import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomInput from '../components/customInput';
import CustomButton from '../components/customButton';
import { router } from 'expo-router';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);
  
  return (
    <View className="flex-1 bg-white p-5">
      <View className="pt-8 pb-6">
        <TouchableOpacity className="border mx-auto border-[#A7A7FF] rounded-tr-full rounded-bl-full py-2 px-6 w-40 items-center">
          <Text className="text-[#A7A7FF] text-lg font-medium">Log In</Text>
        </TouchableOpacity>
      </View>
      
      <Text className="text-2xl font-bold mb-8 text-center text-primary">Welcome back!</Text>
      
      <CustomInput 
        label="Email/phone number"
        placeholder="e.g solomonetim@gmail.com"
      />
      
      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Password</Text>
        <View className="relative">
          <CustomInput 
            placeholder="e.g 1234567"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            className="absolute right-4 top-3"
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text className="text-gray-500">👁️</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View className="flex flex-row justify-between items-center mb-8">
        <View className="flex flex-row items-center">
          <TouchableOpacity 
            className={`w-5 h-5 border ${rememberPassword ? 'bg-[#A7A7FF] ' : 'border-gray-400'} mr-2`}
            onPress={() => setRememberPassword(!rememberPassword)}
          />
          <Text className="text-gray-700">Remember password</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#A7A7FF]">Forgot password?</Text>
        </TouchableOpacity>
      </View>
      
      <CustomButton variant='secondary' title='Login' onPress={()=> router.navigate("/auth/login")} />
      
      <View className="flex flex-row justify-center place-self-end mt-10">
        <Text className="text-gray-700 mr-1">Don't have an account?</Text>
        <TouchableOpacity  onPress={() => router.navigate("/auth/signup")}>
          <Text className="text-[#A7A7FF]">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;