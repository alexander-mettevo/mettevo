import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {homePageServiceList} from "@/store/slices/homePageSlice/data";

export const HomePageSlice = createSlice({
  name: "homePage",
  initialState: {
    homePageServiceList
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