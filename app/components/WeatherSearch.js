// @flow
import React from "react";
import { Button, TextInput, StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { addItemToList } from "../ducks/weather/actions";
import { connect } from "react-redux";

class WeatherSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "String" };
  }

  onPressLearnMore = () => {
    this.props.addItemToList(this.state.text);
  };

  render() {
    return (
      <View>
        <Text>Search: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Button
          onPress={this.onPressLearnMore}
          title="ADD CITY"
          color="#841584"
        />
      </View>
    );
  }
}

WeatherSearch.navigationOptions = {
  title: "Weather Search"
};

WeatherSearch.propTypes = {
  addItemToList: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToList: weather => dispatch(addItemToList(weather))
  };
};

export default connect(null, mapDispatchToProps)(WeatherSearch);
