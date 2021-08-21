import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Dimensions} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from "react-native-maps";
import * as Location from 'expo-location';
import { View, Text } from "react-native";
import { Alert } from "react-native";

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;

var LATITUDE_DELTA = 0.03;
var LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


export default class Loca extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: null,
    };
  }
  getLocation = async() => {
      await Location.requestForegroundPermissionsAsync();
      let {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync();
      const region = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
      this.setState({ region });
    
  };
  componentDidMount(){
    this.getLocation();
  }
  render() {
    return (
      <MapView 
        style={{ flex: 1 }}
        initialRegion={this.state.region}>
        </MapView>
    );
  }
}