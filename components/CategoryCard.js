import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity className="relative mr-2">
        <Image source={{
          uri: imgUrl
        }}
        className="w-20 h-20"
        resizeMode='cover'
        style={{borderRadius: 10}}
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard