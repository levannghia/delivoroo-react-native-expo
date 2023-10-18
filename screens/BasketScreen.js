import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../featureds/restaurantSlice'
import { removeFromBasket, selecteBasketItems, selecteBasketTotal } from '../featureds/basketSlice'
import { useDispatch, useSelector } from 'react-redux'
import Currency from "react-currency-formatter"
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from '../sanity'

const BasketScreen = () => {
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selecteBasketItems)
  const basketTotal = useSelector(selecteBasketTotal)
  const dispatch = useDispatch()
  const [groupedItemsInBasket, setGroupedItemBasket] = useState([])
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results;
    }, {});

    setGroupedItemBasket(groupedItems)
  }, [items])
  // console.log("chua lam gi: ", groupedItemsInBasket);
  // console.log("da lam roi: ", Object.entries(groupedItemsInBasket));
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
            <XCircleIcon color="#00CCBB" height={50} width={50}/>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 bg-white py-3 my-5">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{uri: "https://i.pinimg.com/originals/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg"}}
          />
          <Text className="flex-1">Deliver 50 - 70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          { Object.entries(groupedItemsInBasket).map(([key, item]) => (<View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
            <Text className="text-[#00CCBB]">{item.length} x</Text>
            <Image source={{uri: urlFor(item[0]?.image).url()}}
              className="h-12 w-12 rounded-full"
            />
            <Text className="flex-1">{item[0]?.name}</Text>
            <Text className="text-gray-600">
              <Currency quantity={item[0]?.price} currency="VND"/>
            </Text>
            <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
              <Text 
                className="text-xs text-[#00BBCC]"
              >
                Remove
              </Text>
            </TouchableOpacity>
          </View>))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400"><Currency quantity={basketTotal} currency="VND"/></Text>
          </View> 
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400"><Currency quantity={5.99} currency="VND"/></Text>
          </View> 
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold"><Currency quantity={basketTotal + 5.99} currency="VND"/></Text>
          </View> 
          <TouchableOpacity className="rounded-lg bg-[#00CCBB] p-4" onPress={() => navigation.navigate('PreparingOrder')}>
            <Text className="text-center text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen