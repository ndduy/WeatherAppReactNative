// @flow

import React, { Component } from "react";
import { StyleSheet, View, Platform, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import * as reducers from "./ducks";

import AppContainer from "./containers/AppContainer";

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

const rootReducer = combineReducers(reducers);

function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore();

const App = () =>
  <Provider store={store}>
    <AppContainer />
  </Provider>;

export default App;
