import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import {footerMenu, menuItems, pageLinks, rightSideData} from "@/store/slices/menuSlice/data";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menuItems,
    rightSideData,
    showContent: false,
    mobileShowContent: false,
    pageLinks,
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

