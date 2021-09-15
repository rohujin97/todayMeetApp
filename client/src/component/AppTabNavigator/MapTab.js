import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Loca from '../Loca.js'

export default class MapTab extends Component {
    render() {
        return (
            <Loca />
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
