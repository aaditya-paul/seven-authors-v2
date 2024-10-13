import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  font: "font-roboto",
  fontSize: 16,
  mode: "dark",
};

export const toolBar = createSlice({
  name: "toolBar",
  initialState,
  reducers: {
    setFont: (state, action) => {
      state.font = action.payload;
    },

    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },

    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const {setFont, setFontSize, setMode} = toolBar.actions;
export default toolBar.reducer;
