import { configureStore } from "@reduxjs/toolkit";
import passSlice from "./slices/pass-slice";

export const store = configureStore({
  reducer: {
    Pass: passSlice,
  },
});
