import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { makeReducer } from "./rootReducer";

const store = configureStore({
  reducer: makeReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
