// @flow
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { loadWeather } from "../ducks/weather/actions";
import { connect } from "react-redux";
import WeatherItem from "./WeatherItem";

class WeatherDetailScreen extends React.Component {
  componentDidMount() {
    this.props.loadWeather("Moscow");
  }

  render() {
    if (this.props.hasErrored) {
      return <Text>Sorry! There was an error loading the items</Text>;
    }

    if (this.props.isLoading) {
      return <Text>Loading…</Text>;
    }

    if (this.props.weather !== undefined) {
      return <WeatherItem />;
    }

    return (
      <Text>
        {"Test"}
      </Text>
    );
  }
}

WeatherDetailScreen.navigationOptions = {
  title: "Weather Detail"
};

WeatherDetailScreen.propTypes = {
  loadWeather: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
  weatherHasErrored: PropTypes.bool.isRequired,
  weatherIsLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    weather: state.weather.weather,
    weatherHasErrored: state.weather.weatherHasErrored,
    weatherIsLoading: state.weather.weatherIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadWeather: url => dispatch(loadWeather(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  WeatherDetailScreen
);
