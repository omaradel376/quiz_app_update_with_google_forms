import { createSlice } from "@reduxjs/toolkit";

const passSlice = createSlice({
  initialState: {},
  name: "passSlice",
  reducers: {
    changeStateToinputValue: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { changeStateToinputValue } = passSlice.actions;
export default passSlice.reducer;
