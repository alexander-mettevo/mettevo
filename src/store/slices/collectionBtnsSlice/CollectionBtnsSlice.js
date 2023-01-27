import {createSlice} from "@reduxjs/toolkit";
import {initialData} from "@/store/slices/collectionBtnsSlice/data";
import {HYDRATE} from "next-redux-wrapper";

export const CollectionBtnsSlice = createSlice({
  name: 'collectionBtns',
  initialState: {
    initialData
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

export default CollectionBtnsSlice.reducer