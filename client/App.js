
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
const deviceWidth = Dimensions.get('window').width;
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { Provider } from 'react-redux';
const socket = io("http://172.30.1.59:3001")
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

function reducer(state = { conversations: {}}, action) {
  switch(action.type) {
    case 'users_online':
      const conversations = {...state.conversations};
      const usersOnline = action.data;
      for(let i = 0; i < usersOnline.length; i++){
        const userId = usersOnline[i].userId
        if (conversations[userId] === undefined){
          conversations[userId] = {
            messages: [],
            userName: usersOnline[i].userName
          }
        }
      }
      return {...state, usersOnline, conversations };
    case 'private_message' :
      const conversationId = action.data.conversationId;
      return {
        ...state,
        conversations : {
          ...state.conversations,
          [conversationId] : {
            ...state.conversations[conversationId],
            messages : [
              action.data.message,
              ...state.conversations[conversationId].messages,
            ]
          }
        }
      };
    case 'self_user' :
      return {...state, selfUser: action.data };
    default:
      return state;
  }
}
// 미들웨어 파싱 -> 스토어 생성 -> 리듀서 
const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
})

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
