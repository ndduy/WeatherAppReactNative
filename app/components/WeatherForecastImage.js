// @flow

import React, { Component } from "react";
import { Image } from "react-native";

export default class WeatherForecastItem {
  static renderForecastImage(icon: string, width: number, height: number) {
    var image: number;
    switch (icon) {
      case "Mostly Sunny":
        image = require("./img/sunny.png");
        break;
      case "02n":
        image = require("./img/sunny_s_cloudy.png");
        break;
      case "Partly Cloudy":
        image = require("./img/partly_cloudy.png");
        break;
      case "Mostly Cloudy":
        image = require("./img/cloudy.png");
        break;
      case "Scattered Showers":
        image = require("./img/rain.png");
        break;
      case "10n":
        image = require("./img/rain_s_cloudy.png");
        break;
      case "Thunderstorms":
        image = require("./img/thunderstorms.png");
        break;
      case "13d":
        image = require("./img/snow.png");
        break;
      case "50d":
        image = require("./img/fog.png");
        break;
    }

    const imageStyle = {
      width: width,
      height: height
    };

    return <Image style={imageStyle} source={image} />;
  }
}
