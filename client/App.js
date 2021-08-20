import React from ‘react’;
import { StyleSheet, View, Text, ScrollView, Dimensions } from ‘react-native’;
import MainScreen from ‘./src/component/MainScreen’;
import { NavigationContainer } from ‘@react-navigation/native’;
import { createStackNavigator } from ‘@react-navigation/stack’;
import * as Location from ‘expo-location’;
import Icon from ‘react-native-vector-icons/Ionicons’;
import UserList from ‘./src/component/UserList/UserList’
const deviceWidth = Dimensions.get(‘window’).width;
const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
      <Icon name=“location-outline” size={30} style={{ paddingLeft: deviceWidth - 190 }}></Icon>
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
    backgroundColor: ‘#FCFCFC’,
  },
  title: {
    height: 65,
    flexDirection: ‘row’,
    backgroundColor: ‘white’,
    alignItems: ‘center’,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    alignItems: ‘flex-start’,
    fontWeight: ‘bold’,
  },
});
