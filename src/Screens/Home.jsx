import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import Stuff from '../Components/Stuff';

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row w-full">
        <Text className="text-blue-600">Inventory</Text>
        <AntDesign name="pluscircle" size={24} color="blue" />
      </View>
    </SafeAreaView>
  )
}

export default Home