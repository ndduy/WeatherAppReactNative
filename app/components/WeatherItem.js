import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderWeather(cityData, i) {
    if (cityData.query === undefined) {
      return <View />;
    }
    const temps = cityData.query.results.channel.item.forecast.map(
      weather => weather.high
    );
    const lows = cityData.query.results.channel.item.forecast.map(
      weather => weather.low
    );
    const forecast = cityData.query.results.channel.item.forecast.map(
      weather => weather.day + " - " + weather.text
    );
    const lat = cityData.query.results.channel.item.lat;
    const lon = cityData.query.results.channel.item.long;
    console.log(temps);
    console.log(lows);
    console.log(forecast);
    console.log(lat, lon);

    return (
      <View>
        <Text>
          {temps[0]}
        </Text>
        <Text>
          {lows[0]}
        </Text>
        <Text>
          {forecast[0]}
        </Text>
        <Text>
          {lat}
        </Text>
        <Text>
          {lon}
        </Text>
      </View>
    );
  }
  render() {
    return (
      <View>
        {this.renderWeather(this.props.weather)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather.weather };
}

export default connect(mapStateToProps)(WeatherList);
