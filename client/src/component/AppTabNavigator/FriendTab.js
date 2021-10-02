import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Loca from '../Loca.js'

export default class FriendTab extends Component {
  render() {
    return (
      <View style={style.container}>
                <Text>FriendTab</Text>
            </View>
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

