import { Reducer } from "@reduxjs/toolkit";
import store from ".";
import { makeReducer } from "./rootReducer";
import { ComponentType } from "react";

const injectReducer = (key: string, reducer: Reducer) => {
  if ((store.getState() as Object).hasOwnProperty(key)) return false;

  store.replaceReducer(makeReducer({ [key]: reducer }));

  return store;
};

export const withReducer =
  (key: string, reducer: Reducer) => (WrappedComponent: ComponentType) => {
    injectReducer(key, reducer);
    return (props: any) => <WrappedComponent {...props} />;
  };
