import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import {footerMenu, menu, menuItems, pageLinks, rightSideData} from "@/store/slices/menuSlice/data";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menu,
    footerMenu
  },
  reducers: {
    switchShowContent: (state) => {
      state.showContent = !state.showContent
    },
    switchMobileShowContent: (state) => {
      state.mobileShowContent = !state.mobileShowContent
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    }
  }
});

export default menuSlice.reducer;
export const { switchShowContent, switchMobileShowContent } = menuSlice.actions;

