import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import WeatherForecastItem from "./WeatherForecastItem";

class WeatherList extends Component {
  renderHeader(cityData) {
    if (cityData.query === undefined) {
      return <View />;
    }

    const city = cityData.query.results.channel.location.city;
    const country = cityData.query.results.channel.location.country;
    const temp = cityData.query.results.channel.item.condition.temp;
    const date = cityData.query.results.channel.item.condition.date;
    const lat = cityData.query.results.channel.item.lat;
    const lon = cityData.query.results.channel.item.long;

    return (
      <View>
        <Text>
          City: {city}
        </Text>
        <Text>
          Country: {country}
        </Text>
        <Text>
          Temperature: {temp}
        </Text>
        <Text>
          Date: {date}
        </Text>
        <Text>
          Latitude: {lat}
        </Text>
        <Text>
          Longitude: {lon}
        </Text>
      </View>
    );
  }

  renderWeather(cityData, i) {
    if (cityData.query === undefined) {
      return <View />;
    }

    const forecast = cityData.query.results.channel.item.forecast;

    return forecast.map((item, index) => {
      if (index === 0) {
        return null;
      }

      if (index < forecast.length - 1) {
        var separator = {
          borderColor: "#F4F4F4",
          borderBottomWidth: StyleSheet.hairlineWidth
        };
      }

      return (
        <WeatherForecastItem
          key={item.day}
          index={index}
          {...item}
          separator={separator}
        />
      );
    });
  }

  render() {
    return (
      <View>
        <View>
          {this.renderHeader(this.props.weather)}
        </View>
        <View>
          {this.renderWeather(this.props.weather)}
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather.weather };
}

export default connect(mapStateToProps)(WeatherList);
