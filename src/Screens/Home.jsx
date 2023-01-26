import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import Stuff from '../Components/Stuff';
import Inventory from '../Components/Inventory';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 flex justify-center items-center">
      <Text className="font-bold text-2xl">Welcome Home 😊</Text>
    </SafeAreaView>
  )
}

export default Home