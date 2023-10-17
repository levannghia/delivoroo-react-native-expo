import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);

      let newBasket = [...state.items]

      if(index >= 0){
        newBasket.splice(index, 1)
      }else{
        console.warn(`Cant remove product (id: ${action.payload.id}) as it not in basket`);
      }

      state.items = newBasket;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { removeFromBasket, addToBasket } = basketSlice.actions
export const selecteBasketItems = state => state.basket.items
export const selecteBasketItemsWithId = (state, id) => state.basket.items.filter((item) => item.id === id)
export const selecteBasketTotal = (state) => state.basket.items.reduce((total, item) => total += item.price, 0)
export default basketSlice.reducer