/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MainIndex from './src/cross.index.js';

export default class PleaseRun extends Component {
  render() {
    return (
      <MainIndex />
    );
  }
}

AppRegistry.registerComponent('PleaseRun', () => PleaseRun);
