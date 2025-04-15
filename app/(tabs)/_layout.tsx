import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
// import Home from 'react-native-vector-icons'
const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{headerShown: false, title: "Home", 
        tabBarIcon: ({focused}) => (
          <>
          {/* <Home /> */}
          </>
        )
      }} 
      />
      {/* <Tabs.Screen name='index' options={{headerShown: false, title: "Home"}}/> */}
    </Tabs>
  )
}

export default _Layout
