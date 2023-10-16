import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter"
import { urlFor } from '../sanity'

const DishRow = ({ id, name, short_description, price, image }) => {
    const [isPressed, setIsPressed] = useState()
    return (
        <>
        <TouchableOpacity className="bg-white border-gray-200 p-4 border">
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
            <View>
                <View>
                    <TouchableOpacity></TouchableOpacity>
                </View>
            </View>
        )}
        </>
    )
}

export default DishRow
