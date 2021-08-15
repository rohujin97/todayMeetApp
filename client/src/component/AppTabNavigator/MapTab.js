import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Location from '../Location.js'

export default class MapTab extends Component {
  render() {
    return (
      <Location />
    );
  }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

