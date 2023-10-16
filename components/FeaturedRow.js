import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from './RestaurantCard';
import sanityClient from '../sanity'

const FeaturedRow = ({ id, title, description, FeaturedCategory }) => {
  const [restaurants, setRestaurant] = useState([])
  useEffect(() => {
    sanityClient.fetch(`*[_type == 'featured' && _id == $id ] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] -> {
          ...,
          type -> {
            name
          }
        }
      }
    }[0]`, {id}).then((data) => {
      setRestaurant(data?.restaurants)
    })
  }, [])

  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center px-4 mt-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView horizontal
        contentContainerStyle={{
          paddingHorizontal: 15
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            genre={restaurant.type?.name}
            address={restaurant.address}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}

      </ScrollView>
    </View>
  )
}

export default FeaturedRow