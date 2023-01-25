import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


const AddImage = () => {
  return (
    <View className="w-full flex justify-center items-center">
        <View className="w-28 h-28 flex flex-col border border-gray-300 rounded-full items-center justify-center">
            <AntDesign name="camera" size={28} color="black" /> 
            <Text className="text-black">AddImage</Text>
        </View>
    </View>
    
  )
}

export default AddImage