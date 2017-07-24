// @flow
import React from "react";
import { ScrollView, Button, StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";
import { addItemToList } from "../ducks/weather/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class WeatherListScreen extends React.Component {
  componentDidMount() {
    this.props.addItemToList("Moscow");
  }

  onLearnMore = weather => {
    this.props.navigation.navigate("WeatherDetailScreen", { weather: weather });
  };

  render() {
    if (this.props.weatherList !== undefined) {
      return (
        <ScrollView>
          <List>
            {this.props.weatherList.map(weatherItem =>
              <ListItem
                key={weatherItem}
                title={weatherItem}
                onPress={() => this.onLearnMore(weatherItem)}
              />
            )}
          </List>
        </ScrollView>
      );
    } else {
      return (
        <Text>
          {"Test"}
        </Text>
      );
    }
  }
}
WeatherListScreen.propTypes = {
  addItemToList: PropTypes.func.isRequired,
  weatherList: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    weatherList: state.weather.weatherList
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToList: weather => dispatch(addItemToList(weather))
  };
};

WeatherListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Weather List",
    headerRight: (
      <Button
        title="Add City"
        onPress={() => navigation.navigate("WeatherSearch")}
      />
    ),
    headerLeft: (
      <Button
        title="My Location"
        onPress={() => navigation.navigate("WeatherDetailScreen")}
      />
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherListScreen);
