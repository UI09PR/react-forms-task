import { configureStore } from "@reduxjs/toolkit";
import formsDataReducer from "./slices/formsData/slice";

export const store = configureStore({
  reducer: {
    formsDataSlice: formsDataReducer,
  },
});

export type StoreT = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
