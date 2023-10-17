import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter"
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid'
import { addToBasket, selecteBasketItems, selecteBasketItemsWithId, removeFromBasket } from "../featureds/basketSlice"
import { useDispatch, useSelector } from 'react-redux'

const DishRow = ({ id, name, short_description, price, image }) => {
    const dispatch = useDispatch()
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector((state) => selecteBasketItemsWithId(state, id))
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, short_description, price, image }))
    }

    const removeItemFromBasket = () => {
        if(items.length > 0){
            dispatch(removeFromBasket({id}))
        }
    }
    console.log(items);
    return (
        <>
        <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border-gray-200 p-4 border ${isPressed && "border-b-0"}`}>
            <View className="flex-row items-center">
                <View className="flex-1 pr-4">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400 text-justify">{short_description}</Text>
                    <Text className="text-gray-400 mt-2"><Currency quantity={price} currency="VND" /></Text>
                </View>

                <View>
                    <Image source={{
                        uri: urlFor(image).url()
                    }}
                        className="w-20 h-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
        </TouchableOpacity>
        {isPressed && (
            <View className="bg-white px-4">
                <View className="flex-row items-center space-x-2">
                    <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
                        <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"}/>
                    </TouchableOpacity>
                    <Text>{items.length}</Text>
                    <TouchableOpacity onPress={addItemToBasket}>
                        <PlusCircleIcon size={40} color={"#00CCBB"}/>
                    </TouchableOpacity>
                </View>
            </View>
        )}
        </>
    )
}

export default DishRow
