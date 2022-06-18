import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      console.log(action.payload)
      state.cart = action.payload.cart;
    },
    addItem(state, action) {

      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.title === newItem.title);
      // if existing item, increment amount by 1
      state.changed = true;

      if (!existingItem) {
        state.cart.push({
          title: action.payload.title,
          amount: 1,
          price: action.payload.price,
        });
      } else {
        existingItem.amount++;
        console.log("item already exists");
      }
    },
    removeItem(state, action) {
      const selecteditem = action.payload;
      const existingItem = state.cart.find((item) => item.title === selecteditem.title);

      state.changed = true;
      // if existing item has only one, remove from array
      if (selecteditem.amount === 1) {
        state.cart = state.cart.filter((item) => item.title !== existingItem.title);
      } else {
        // if more than one, decrement amount of existing item by 1
        existingItem.amount--;
      }
    },
  },
});



export const cartActions = cartSlice.actions;
export default cartSlice;
