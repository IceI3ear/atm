import { configureStore } from "@reduxjs/toolkit";

import atmSlice from "./atms.slice";
import authSlice from "./auth.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    atm: atmSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
