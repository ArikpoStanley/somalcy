import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
import CustomButton from '../components/customButton';

const Welcome = () => {
  return (
    <View className="px-5 flex-1 ">
      <Image
        source={require('@/assets/images/welcomeimage.png')}
        className="w-[311px] h-[226px]"
      />

      <View className='mt-20'>
        <Text className='text-center text-[16px]'>
            Welcome to <Text className='text-[20px] text-primary font-bold'>Somalcy</Text>
        </Text>
        <Text className='text-center leading-[100%] text-[16px] mb-10'>
        We are excited to help find you solution at your own convenience
        </Text>
      </View>

    <View className='flex flex-col gap-4'>
        <View>
            <CustomButton title="Log In" onPress={() => router.navigate('/auth/login')} variant="secondary" />
        </View>
        
        <View>
            <CustomButton title="Sign Up" onPress={() => router.navigate('/auth/signup')} variant="primary" />
        </View>
        
    </View>

    <TouchableOpacity className=' mt-20' >
        <Text className='text-[#A7A7FF] text-center underline'>
        Learn more about somalcy
        </Text>
    </TouchableOpacity>
     
    </View>
  );
};

export default Welcome;
