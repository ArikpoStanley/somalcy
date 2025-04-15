import { Text, View } from 'react-native';
import React from 'react';

// Define component as a functional component with React.FC type
const Splash: React.FC = () => {
  return (
    <View className='bg-[#00004E] flex-1 justify-center items-center '>
      <Text className='text-white font-bold text-md'>Solution at Convenience</Text>
    </View>
  );
};

export default Splash;
