
import React, { Component, useState, useEffect } from "react";
import { StyleSheet} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from "react-native-maps";
export default class Location extends Component {
  render() {
    return (
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.451017478857075,
            longitude: 126.66100968223704,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 37.451017478857075, longitude: 126.66100968223704}}
            title="this is a marker"
            description="this is a marker example"
          />
        </MapView>
    );
  }
}
