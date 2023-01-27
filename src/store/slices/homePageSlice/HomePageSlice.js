import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {homePageServiceList, homePageStandOutContent, homePageStories} from "@/store/slices/homePageSlice/data";

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState: {
    homePageServiceList,
    homePageStandOutContent,
    homePageStories
  },
  reducers: {

  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    }
  }
})

export default HomePageSlice.reducer