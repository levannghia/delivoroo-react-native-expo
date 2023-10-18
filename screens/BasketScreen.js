import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../featureds/restaurantSlice'
import { selecteBasketItems } from '../featureds/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import Currency from "react-currency-formatter"
import { } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selecteBasketItems)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemBasket] = useState([])
  useMemo(() => {

  }, [items])

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-md">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-500">{restaurant.title}</Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >

          </TouchableOpacity>
        </View>
        <View>
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{uri: ""}}
          />
          <Text className="flex-1">Deliver 50 - 70 min</Text>
          <TouchableOpacity className="text-[#00CCBB]">Change</TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <Text>28 x</Text>
            <Image source={{uri: ""}}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">hay qua xa</Text>
            <Text className="text-gray-600">
              <Currency quantity={basketTotal} currency="VND"/>
            </Text>
            <TouchableOpacity>
              <Text 
                className="text-xs text-[#00BBCC]"
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen