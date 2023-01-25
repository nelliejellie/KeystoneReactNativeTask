import { View, Image } from 'react-native'
import React from 'react'

const ShowImage = ({uri}) => {
  return (
    <View className="w-full flex justify-center items-center">
        <View className="w-28 h-28 flex flex-col border border-gray-300 rounded-full items-center justify-center">
            <Image
             source={{
                uri: uri
             }}
             className="w-28 h-28 rounded-full"
             resizeMode='contain'
            />
        </View>
    </View>
  )
}

export default ShowImage