import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { selecteBasketItems, selecteBasketTotal } from '../featureds/basketSlice'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Currency from "react-currency-formatter"

const BasketIcon = () => {
    const navigation = useNavigation()
    const items = useSelector(selecteBasketItems)
    const basketTotal = useSelector(selecteBasketTotal)
  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity onPress={() => navigation.navigate('Basket')} className="bg-[#00CCBB] p-4 mx-5 flex-row justify-between items-center">
        <Text className="text-lg text-white font-extrabold bg-[#01A296] px-2 py-1">{items.length}</Text>
        <Text className="text-lg text-white font-extrabold">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
            <Currency quantity={basketTotal} currency="VND"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon