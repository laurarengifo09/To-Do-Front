import { AsyncThunkAction, EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { makeReducer } from "./rootReducer";

interface IStore extends EnhancedStore<AsyncThunkAction<any, any, any>>{
  asyncReducers?: any;
}

const store: IStore = configureStore<AsyncThunkAction<any, any, any>>({
  reducer: makeReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

store.asyncReducers = {};

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;