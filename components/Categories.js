import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, {urlFor} from '../sanity'
import category from '../diliverroo-clone/schemas/category'

const Categories = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => [
    sanityClient.fetch(`*[_type == 'category']`).then(data => {
      setCategories(data)
    })
  ], [])
  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }} horizontal showsHorizontalScrollIndicator={false}>
      {Categories?.map(category => (
        <CategoryCard 
         imgUrl={urlFor(category.image).width(200).url()}
         title={category.name} key={category._id}
          />
      ))}

    </ScrollView>
  )
}

export default Categories