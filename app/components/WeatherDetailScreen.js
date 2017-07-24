// @flow
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { loadWeather, loadWeatherLatLong } from "../ducks/weather/actions";
import { connect } from "react-redux";
import WeatherItem from "./WeatherItem";

class WeatherDetailScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;

    if (params !== undefined) {
      this.props.loadWeather(params.weather);
    } else {
      navigator.geolocation.getCurrentPosition(
        position => {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
          this.props.loadWeatherLatLong(latitude, longitude);
        },
        error => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
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
  loadWeatherLatLong: PropTypes.func.isRequired,
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
    loadWeather: url => dispatch(loadWeather(url)),
    loadWeatherLatLong: (lat, long) => dispatch(loadWeatherLatLong(lat, long))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  WeatherDetailScreen
);
