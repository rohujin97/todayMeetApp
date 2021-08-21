import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Title />
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  title: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});