import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { router } from 'expo-router';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

const Otp = () => {  
  return (
    <View className="flex-1 p-5 pt-24">
  
        <Text className="text-gray-700 font-semibold text-[30px] text-center mb-">Verify OTP</Text>
        <Text className="text-gray-700 font-semibold text-[18px] text-center mb-16">Input five digit code sent to your email</Text>
          
          <View className='flex flex-row align-items-center gap-5 justify-between '>
            <Text className="text-gray-700 font-semibold">Code expires in </Text> 
            <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={['#0000e7', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[45, 30, 15, 0]}
            size={20}
            strokeWidth={2}
            isSmoothColorTransition
          >
            {({ remainingTime }) => <Text>{remainingTime}</Text>}
            </CountdownCircleTimer>
          </View>

          {/* otp input */}
        
        <View className='my-2'>
            <OtpInput numberOfDigits={5} onTextChange={(text) => console.log(text)} />
        </View>

        {/* didn't receive a code */}

        <View className='flex flex-row justify-between items-center'>
          <Text className="text-gray-700 font-semibold">Didn't receive a code</Text> 

          <TouchableOpacity>
          <Text className="text-[#4848FF] font-bold">Resend code</Text>
          </TouchableOpacity>
        </View>
      
      <TouchableOpacity className="bg-primary py-4 rounded-full items-center mt-32" onPress={() => router.navigate("/auth/password")}>
        <Text className="text-white text-lg font-medium">Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;