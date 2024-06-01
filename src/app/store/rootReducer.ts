import { combineReducers, Reducer } from "@reduxjs/toolkit";
import userSlice from "../views/auth/store/userSlice";

export const makeReducer =
  (asyncReducers?: { [key: string]: Reducer }) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
      user: userSlice,
      ...asyncReducers,
    });

    return combinedReducer(state, action);
  };
