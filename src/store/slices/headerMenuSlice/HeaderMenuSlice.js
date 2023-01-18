import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import {menuItems, pageLinks, rightSideData} from "@/store/slices/headerMenuSlice/data";

export const headerMenuSlice = createSlice({
  name: "headerMenu",
  initialState: {
    menuItems,
    rightSideData,
    showContent: false,
    mobileShowContent: false,
    pageLinks
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

export default headerMenuSlice.reducer;
export const { switchShowContent, switchMobileShowContent } = headerMenuSlice.actions;

