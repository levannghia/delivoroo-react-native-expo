import { View, Text, SafeAreaView, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity'

const statusBarHeight = StatusBar.currentHeight || 0;

const HomeScreen = () => {
    const [FeaturedCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        sanityClient.fetch(`*[_type == 'featured'] {
            ...,
            restaurants[] -> {
              ...,
              dishes[] -> {
                type -> {
                  name
                }
              }
            }
          }`).then(data => {
            setFeaturedCategories(data)
        })
    }, [])

    return (
        <SafeAreaView className="bg-white pb-5">
            <StatusBar
                backgroundColor="#ffffff"
                barStyle="dark-content"/>
            <View style={{ marginTop: statusBarHeight, marginHorizontal: 16 }}>
                <View className="flex-row pb-3 items-center space-x-2">
                    <Image source={{
                        uri: 'https://i.pinimg.com/originals/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg'
                    }} className="h-7 w-7 p-4 bg-gray-300 rounded-full" />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
                        <Text className="font-bold text-xl capitalize">
                            Curren location!
                            <ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB"></UserIcon>
                </View>

                <View class="space-x-2 flex-1 mx-4 bg-red-700" style={{ flexDirection: "row", alignItems: "center" }}>
                    <View className="flex-row space-x-2 bg-gray-200 p-3 h-100 flex-1 items-center">
                        <MagnifyingGlassIcon size={20} color="grey" />
                        <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                    </View>
                    <AdjustmentsVerticalIcon size={30} color="#00CCBB" />
                </View>
            </View>

            <ScrollView class="bg-gray-50" contentContainerStyle={{
                paddingBottom: 100.
            }}>
                <Categories />
                {FeaturedCategories?.map(category => (
                    <FeaturedRow 
                        key={category._id}
                        title={category.name}
                        id={category._id}
                        description={category.short_description}
                        FeaturedCategory="features"
                    />
                ))}

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen