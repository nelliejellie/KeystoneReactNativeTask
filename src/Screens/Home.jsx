import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import inventories from '../data'
import { AntDesign } from '@expo/vector-icons';
import Stuff from '../Components/Stuff';
import Inventory from '../Components/Inventory';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 mx-4 mt-20">
      {/* <View className="flex flex-row w-full justify-between items-center">
        <Text className="text-xl font-bold">Inventory</Text>
        <AntDesign name="pluscircle" size={24} color="blue" />
      </View>
      <View>
        <FlatList
          data={inventories}
          renderItem={({item}) => <Inventory name={item.name} />}
          keyExtractor={item => item.name}
        />
      </View> */}
    </SafeAreaView>
  )
}

export default Home