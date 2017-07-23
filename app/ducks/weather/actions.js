//@flow

import * as types from "./types";
import Api from "../../apis/Api";
import { AsyncStorage } from "react-native";

/*
**
* Load a weather item from API
**
*/
export function loadWeatherSuccess(weather: JSON) {
  return {
    type: types.LOAD_WEATHER_SUCCESS,
    weather
  };
}

export function itemsHasErrored(bool: boolean) {
  return {
    type: types.LOAD_WEATHER_ERRORED,
    hasErrored: bool
  };
}

export function itemsIsLoading(bool: boolean) {
  return {
    type: types.LOAD_WEATHER_LOADING,
    isLoading: bool
  };
}

export function loadWeather(city: String) {
  // make async call to api, handle promise, dispatch action when promise is resolved
  return function(dispatch) {
    dispatch(itemsIsLoading(true));
    return Api.fetchWeather(city)
      .then(weather => {
        return weather.json();
      })
      .then(weather => {
        console.log(weather);
        dispatch(itemsIsLoading(false));
        dispatch(loadWeatherSuccess(weather));
      })
      .catch(error => {
        dispatch(itemsHasErrored(true));
        throw error;
      });
  };
}

/*
**
* Load a weather list from local data
**
*/

export function loadWeatherListSuccess(weathers: Array<String>) {
  return {
    type: types.LOAD_WEATHER_LIST_SUCCESS,
    weathers
  };
}

export function addItemToList(weatherItem: String) {
  return function(dispatch) {
    return AsyncStorage.getItem("weatherlist")
      .then(req => JSON.parse(req))
      .then(weatherList => {
        if (!weatherList) {
          weatherList = [];
        }
        if (!weatherList.includes(weatherItem)) {
          weatherList.push(weatherItem);
        }
        AsyncStorage.setItem("weatherlist", JSON.stringify(weatherList));
        dispatch(loadWeatherListSuccess(weatherList));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadList() {
  return function(dispatch) {
    return AsyncStorage.getItem("weatherlist")
      .then(req => JSON.parse(req))
      .then(weatherList => {
        console.log(weatherList);
        dispatch(loadWeatherListSuccess(weatherList));
      })
      .catch(error => {
        throw error;
      });
  };
}
