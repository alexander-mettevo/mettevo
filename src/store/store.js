import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {menuSlice} from "@/store/slices/menuSlice/MenuSlice";
const makeStore = () => configureStore({
  reducer: {
    [menuSlice.name]: menuSlice.reducer
  },
  devTools: true,
});
export const wrapper = createWrapper(makeStore);
