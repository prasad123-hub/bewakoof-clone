import { createSlice, combineReducers } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState: { ...initialState },
  reducers: {
    //actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
      console.log(state.items);
    },
    increasecount: (state) => {
      state.count = state.count + 1;
    },
  },
});

// console.log("global", basketSlice.state);

// export const reducer = combineReducers({
//   basket: basketSlice.reducer,
// });

export const { addToBasket, increasecount } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// export const selectItems = (state) => state.basket.products;

export default basketSlice.reducer;
