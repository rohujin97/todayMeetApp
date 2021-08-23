import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
const deviceWidth = Dimensions.get('window').width;
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io("http://172.30.1.18:3001")
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

function reducer(state = {}, action) {
  switch(action.type) {
    case 'message':
      return {...state, message: action.data };
      default:
        return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
})
store.dispatch({type: "server/hello", data: "Hello!"})

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
      <Icon name='location-outline' size={30} style={{ paddingLeft: deviceWidth - 190 }}></Icon>
    </View>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Title />
        <MainScreen />
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  title: {
    height: 65,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    alignItems: 'flex-start',
    fontWeight: 'bold',
  },
});