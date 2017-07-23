//@flow

import * as types from "./types";
import { combineReducers } from "redux";

function weatherHasErrored(state = false, action) {
  switch (action.type) {
    case types.LOAD_WEATHER_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

function weatherIsLoading(state = false, action) {
  switch (action.type) {
    case types.LOAD_WEATHER_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function weather(state = {}, action) {
  switch (action.type) {
    case types.LOAD_WEATHER_SUCCESS:
      return action.weather;
    default:
      return state;
  }
}

function weatherList(state = [], action) {
  switch (action.type) {
    case types.LOAD_WEATHER_LIST_SUCCESS:
      return action.weathers;
    default:
      return state;
  }
}

const weather = combineReducers({
  weatherHasErrored,
  weatherIsLoading,
  weather,
  weatherList
});

export default weather;
