// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StackNavigator, NavigationActions } from "react-navigation";

import WeatherListScreen from "../components/WeatherListScreen";
import WeatherDetailScreen from "../components/WeatherDetailScreen";
import WeatherSearch from "../components/WeatherSearch";

export const WeatherStack = StackNavigator(
  {
    WeatherListScreen: { screen: WeatherListScreen },
    WeatherDetailScreen: { screen: WeatherDetailScreen }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export const AppNavigator = StackNavigator(
  {
    WeatherStack: {
      screen: WeatherStack
    },
    WeatherSearch: {
      screen: WeatherSearch
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

class App extends Component {
  render() {
    return (
      <AppNavigator
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}

export default connect()(AppNavigator);
