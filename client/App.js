<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
=======
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
    </View>
  )
}

export default function App () {
  return(
    <NavigationContainer>
      <Title />
      <MainScreen />
    </NavigationContainer>
  ) 
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
=======
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
>>>>>>> e924ffea (현재 위치 표시)
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Ionicons';
const deviceWidth = Dimensions.get('window').width;
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io("http://172.30.1.60:3001")
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

function reducer(state = {}, action) {
  switch(action.type) {
    case 'message':
      return {...state, message: action.data };
    case "users_online":
      return { ...state, usersOnline: action.data };
      default:
        return state;
  }
}

const store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(() => {
  console.log("new state", store.getState());
})
store.dispatch({type: "server/hello", data: "Hello!"})
=======
>>>>>>> e924ffea (현재 위치 표시)

const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
<<<<<<< HEAD
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
=======
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

>>>>>>> e924ffea (현재 위치 표시)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  title: {
<<<<<<< HEAD
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
=======
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
<<<<<<< HEAD
>>>>>>> 645ebf9b (현재 위치 표시)
<<<<<<< HEAD
>>>>>>> e924ffea (현재 위치 표시)
});
=======
});
=======
});
>>>>>>> 9cbf13ff (db connect with pool and get data from todaymeet schema)
>>>>>>> 395d211b (db connect with pool and get data from todaymeet schema)
