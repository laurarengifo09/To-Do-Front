import { Reducer } from "@reduxjs/toolkit";
import store from ".";
import { makeReducer } from "./rootReducer";
import { ComponentType } from "react";

const injectReducer = (key: string, reducer: Reducer) => {
  if (store.asyncReducers[key]) return false;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeReducer(store.asyncReducers));

  return store;
};

export const withReducer =
  (key: string, reducer: Reducer) => (WrappedComponent: ComponentType) => {
    injectReducer(key, reducer);
    return (props: any) => <WrappedComponent {...props} />;
  };
