import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  user: {},
};

export const adminSlice = createSlice({
  name: "AdminRedux",
  initialState,
  reducers: {
    setUID: (state, action) => {
      state.uid = action.payload;
    },
    setUserRedux: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUID, setUserRedux} = adminSlice.actions;
export default adminSlice.reducer;
