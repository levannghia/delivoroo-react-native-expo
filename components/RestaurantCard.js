import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StarIcon, MapIcon } from "react-native-heroicons/outline";
import React from 'react'
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('Restaurant', {
                    id,
                    imgUrl,
                    title,
                    rating,
                    genre,
                    address,
                    short_description,
                    dishes,
                    long,
                    lat
                })
            }}
            style={{
                marginBottom: 2,
                marginRight: 10,
                backgroundColor: "white",
                borderRadius: 10,
                shadowColor: "#000000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3
            }}>
            <Image source={{
                uri: urlFor(imgUrl).url()
            }} className="h-36 w-64" style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} resizeMode='cover' />

            <View className="px-3 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" opacity={0.5} size={22} />
                    <Text className="text-sx text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapIcon size={22} color="gray" opacity={0.4} />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard