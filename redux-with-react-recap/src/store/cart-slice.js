import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
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
      state.totalQuantity--;
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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-h-c800f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error();
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data success!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sent cart data success!",
        })
      );
    }
  };
};



export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
