import { View, Text } from 'react-native'
import React, {useMemo, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../featureds/restaurantSlice'
import { selecteBasketItems } from '../featureds/basketSlice'
import { useDispatch, useSelector } from 'react-redux'

const BasketScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selecteBasketItems)
    const dispatch = useDispatch()
    const [groupedItemsInBasket, setGroupedItemBasket] = useState([])
    useMemo(() => {

    }, [items])

  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  )
}

export default BasketScreen