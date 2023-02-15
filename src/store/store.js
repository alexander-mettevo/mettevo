import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {menuSlice} from "@/store/slices/menuSlice/MenuSlice";
import {animationSlice} from "@/store/slices/animationSlice/AnimationSlice";
import {CollectionBtnsSlice} from "@/store/slices/collectionBtnsSlice/CollectionBtnsSlice";

const makeStore = () => configureStore({
  reducer: {
    [menuSlice.name]: menuSlice.reducer,
    [animationSlice.name]: animationSlice.reducer,
    [CollectionBtnsSlice.name]: CollectionBtnsSlice.reducer,
  },
  devTools: true,
});
export const wrapper = createWrapper(makeStore, {debug: true});
