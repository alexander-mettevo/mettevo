import {createSlice} from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import {homePageRowLetters} from "@/store/slices/animationSlice/data";

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    homePageRowLetters
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state
      };
    }
  }

})

export default animationSlice.reducer;