// @flow

import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AppNavigator from "./AppNavigator";

class AppContainer extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default connect()(AppContainer);
