import { Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
const Confirm = () => {
const [redirect, setRedirect] = useState(false)
const redirectUrl = ()=>{
  setRedirect(true)
  if(redirect){
    router.navigate('/auth/email')
  }
}
  setTimeout(() => {
    redirectUrl()
  }, 2000);
  return (
    <View className="px-5 flex-1 py-5 mt-20">
      
      <View className='p-2 border-2 border-gray-400 bg-gray-200 pt-24 pb-10'>
      <Text className='text-center leading-[100%] text-[20px] mb-10 bold'>
        Face Verification Successful! 
      </Text>
      <Image
        source={require('@/assets/images/check.png')}
        className="w-[80px] h-[80px] mx-auto animate-bounce"
      />
      </View>

      <Text className='text-center text-primary leading-[100%] text-[20px] mt-10 animate-ping'>
        Redirecting...
      </Text>
    </View>
  );
};

export default Confirm;
