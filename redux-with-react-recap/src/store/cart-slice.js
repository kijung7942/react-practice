import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalAmount: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalAmount += newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const findedItem = state.items.find((item) => item.id === id);
      findedItem.quantity--;
      findedItem.totalAmount -= findedItem.price;
      if (findedItem.quantity === 0) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
