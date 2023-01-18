import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {headerMenuSlice} from "@/store/slices/headerMenuSlice/HeaderMenuSlice";
const makeStore = () => configureStore({
  reducer: {
    [headerMenuSlice.name]: headerMenuSlice.reducer,
  },
  devTools: true,
});
export const wrapper = createWrapper(makeStore);
