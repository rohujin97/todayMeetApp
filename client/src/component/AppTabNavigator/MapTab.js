import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
<<<<<<< HEAD
// import Location from '../Location.js'
=======
import Loca from '../Loca.js'
>>>>>>> experiment

export default class MapTab extends Component {
  render() {
    return (
<<<<<<< HEAD
        <View>
            <Text>Map</Text>
        </View>
    //   <Location />
=======
      <Loca />
>>>>>>> experiment
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