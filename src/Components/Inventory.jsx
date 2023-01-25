import { View, Text, Image } from 'react-native'
import React from 'react'

const Inventory = ({name, photo, purchasePrice}) => {
  return (
    <View className="rounded-md border border-white bg-white h-56">
      <Image
        source={{
            uri:photo
        }}
        className="w-44 h-28 rounded-t-md"
      />
      <View className="flex flex-col justify-between h-[40%] pl-4 pt-4">
        <Text className="font-extrabold text-lg">{name}</Text>
        <Text>{purchasePrice}</Text>
      </View>
    </View>
  )
}

export default Inventory