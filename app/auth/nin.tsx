import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomInput from '../components/customInput'
import { router } from 'expo-router';
const Nin = () => {
  return (
    <View className='px-5 mt-20'>
      <Text className='text-center'>NIN Details</Text>

      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Full Name</Text>
        <View className="relative">
          <CustomInput placeholder="John doe"/>
        </View>
      </View>


      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Phone Number</Text>
        <View className="relative">
          <CustomInput placeholder="+234 #### #### ###"/>
        </View>
      </View>


      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">State of Origin</Text>
        <View className="relative">
          <CustomInput placeholder="e.g Cross River"/>
        </View>
      </View>


      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">LGA of Origin</Text>
        <View className="relative">
          <CustomInput placeholder="e.g Calabar South"/>
        </View>
      </View>


      <View className="mb-2">
        <Text className="text-gray-700 mb-2 font-semibold">Home Address</Text>
        <View className="relative">
          <CustomInput placeholder="e.g 14 Palm Street"/>
        </View>
      </View>

      <View className='justify-between flex flex-row mt-5 '>
        <TouchableOpacity className='px-8 py-2 rounded-3xl shadow-lg border-b border-r border-gray-400 bg-white' onPress={()=> router.back()}>
          <Text className='text-[#0000E7] text-[20px] font-bold'>No</Text>
        </TouchableOpacity>

        <TouchableOpacity className='px-8 py-2 rounded-3xl shadow-lg border-b border-r border-gray-400 bg-white' onPress={()=> router.push('/auth/Face-Verification')}>
          <Text className='text-[#0000E7] text-[20px] font-bold'>Yes</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Nin

const styles = StyleSheet.create({})