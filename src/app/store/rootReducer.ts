import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../views/auth/store/userSlice";

export const makeReducer =
  (asyncReducers?: any) => (state: any, action: any) => {
    const combinedReducer = combineReducers({
      userSlice,
      ...asyncReducers,
    });

    return combinedReducer(state, action);
  };
