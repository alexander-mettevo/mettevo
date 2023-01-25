import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {menuSlice} from "@/store/slices/menuSlice/MenuSlice";
import {animationSlice} from "@/store/slices/animationSlice/AnimationSlice";
import {HomePageSlice} from "@/store/slices/homePageSlice/HomePageSlice";

const makeStore = () => configureStore({
  reducer: {
    [menuSlice.name]: menuSlice.reducer,
    [animationSlice.name]: animationSlice.reducer,
    [HomePageSlice.name]: HomePageSlice.reducer
  },
  devTools: true,
});
export const wrapper = createWrapper(makeStore);
