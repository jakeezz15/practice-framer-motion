import { configureStore } from "@reduxjs/toolkit";
import notification from "../redux/data/notificationSlice";
import colorScheme from "../redux/data/colorSchemeSlice";

export const store = configureStore({
  reducer: {
    colorScheme,
    notification,

    // assets,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
