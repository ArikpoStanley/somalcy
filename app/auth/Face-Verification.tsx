import { Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
import CustomButton from '../components/customButton';

const list=[
  {path: "@/assets/images/Group1.png", text: "Stay iin well lighted environment"},
  {path:"@/assets/images/Group2.png", text: "Remove all face covering agents e.g hats, glasses, hijabs etc."},
  {path: "@/assets/images/Group1.png", text: "Follow on screen instructions during face capture"}
]


const FaceVerification = () => {
  return (
    <View className="px-5 flex-1">
      <Image
        source={require('@/assets/images/verify.png')}
        className="w-[311px] h-[226px]"
      />

      <View className='mt-8'>
        <Text className='text-center '>
            <Text className='text-[20px] text-primary font-bold'>Face Verification</Text>
        </Text>
        <Text className='text-center leading-[100%] text-[20px] mb-10'>
        Please follow due instructions to ensure correct capture.
        </Text>
      </View>


      <View className='p-2 border border-dashed'>
        <Text className='text-[16px]'>
          We recommend that you...
        </Text>

        {list.map((li, index)=>(
          <View key={index} className='flex flex-row gap-2 items-center mt-5 p-2'>
           <Image
        source={require('@/assets/images/Group.png')}
        className="w-[20px] h-[25px]"
      />
          <Text className='text-[16px]'>{li?.text}</Text>
        </View>
        ))}
      </View>


        <View>
            <CustomButton title="Proceed" onPress={() => router.navigate('/auth/Scan')} variant="primary" />
        </View>
        
    </View>
  );
};

export default FaceVerification;
