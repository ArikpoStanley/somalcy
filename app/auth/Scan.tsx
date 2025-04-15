import { Text, View, Image } from 'react-native';
import { router } from 'expo-router';
import React from 'react';
import CustomButton from '../components/customButton';

const Scan = () => {
  return (
    <View className="px-5 flex-1 py-5">
      <Image
        source={require('@/assets/images/Qr.png')}
        className="w-[255px] h-[274px] mx-auto "
      />

      <View className='mt-8'>
        <Text className='text-center leading-[100%] text-[16px] mb-10 italic'>
        (Position your face in the middle of the camera)
        </Text>
      </View>
        <View>
            <CustomButton title="Verify Face" onPress={() => router.navigate('/auth/Confirm')} variant="primary" />
        </View>
        
    </View>
  );
};

export default Scan;
