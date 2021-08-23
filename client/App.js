<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
=======
=======
>>>>>>> b62a2012 (use ChatListStyles)
=======
>>>>>>> 54193eb1 (Update App.js)
=======
>>>>>>> 7a12147d (login, signup Screen transition)
=======
>>>>>>> 752a4de9 (hoo)
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
=======
=======
=======
>>>>>>> ac2e3a7b (hoo)
import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/Ionicons';
const deviceWidth = Dimensions.get('window').width;
<<<<<<< HEAD
>>>>>>> 3c57a5a8 (use ChatListStyles)
>>>>>>> b62a2012 (use ChatListStyles)

=======
import React from ‘react’;
import { StyleSheet, View, Text, ScrollView, Dimensions } from ‘react-native’;
import MainScreen from ‘./src/component/MainScreen’;
import { NavigationContainer } from ‘@react-navigation/native’;
import { createStackNavigator } from ‘@react-navigation/stack’;
import * as Location from ‘expo-location’;
import Icon from ‘react-native-vector-icons/Ionicons’;
=======
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
const socket = io("http://172.30.1.18:3001")
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
>>>>>>> e0618202 (re)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const deviceWidth = Dimensions.get(‘window’).width;
>>>>>>> a578b8d1 (Update App.js)
=======
import Icon from 'react-native-vector-icons/Ionicons';
const deviceWidth = Dimensions.get('window').width;
=======
function reducer(state = {}, action) {
  switch(action.type) {
    case 'message':
      return {...state, message: action.data };
      default:
        return state;
  }
}
>>>>>>> d45f3edf (adding redux)

>>>>>>> 2ac61688 (use ChatListStyles)
=======
>>>>>>> d0c0ef9c (little modify redux)
const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
<<<<<<< HEAD
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
=======
=======
      <Icon name='location-outline' size={30} style={{ paddingLeft: deviceWidth - 190 }}></Icon>
>>>>>>> 3c57a5a8 (use ChatListStyles)
>>>>>>> b62a2012 (use ChatListStyles)
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

>>>>>>> e924ffea (현재 위치 표시)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  title: {
<<<<<<< HEAD
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
=======
>>>>>>> b62a2012 (use ChatListStyles)
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
=======
    height: 65,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
>>>>>>> 3c57a5a8 (use ChatListStyles)
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
<<<<<<< HEAD
=======
    paddingLeft: 20,
    alignItems: 'flex-start',
>>>>>>> 3c57a5a8 (use ChatListStyles)
    fontWeight: 'bold',
  },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> 395d211b (db connect with pool and get data from todaymeet schema)
=======
=======
});
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
<<<<<<< HEAD
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
=======
=======
});
>>>>>>> a578b8d1 (Update App.js)
<<<<<<< HEAD
>>>>>>> 54193eb1 (Update App.js)
=======
=======
});
>>>>>>> 1b5461e3 (db connect with pool and get data from todaymeet schema)
<<<<<<< HEAD
>>>>>>> 148973cd (db connect with pool and get data from todaymeet schema)
=======
=======
});
>>>>>>> 5fcd1055 (still move page from chatlist to chatroom)
<<<<<<< HEAD
>>>>>>> b2069f84 (still move page from chatlist to chatroom)
=======
=======

import * as React from 'react'; import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import LoginScreen from './src/component/login/login'; 
import SignUpScreen from './src/component/login/signup'; 
import SignUp2Screen from './src/component/login/signup2'; 
import DoneScreen from './src/component/login/done'; 

const Stack = createStackNavigator(); 

function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="MAIN"> 
      <Stack.Screen name="LOGIN" component={LoginScreen} options={{ title: '로그인' }}/>
      <Stack.Screen name="SIGNUP" component={SignUpScreen} options={{ title: '회원가입1' }}/> 
      <Stack.Screen name="SIGNUP2" component={SignUp2Screen} options={{ title: '회원가입2' }}/> 
      <Stack.Screen name="DONE" component={DoneScreen} options={{ title: '완료' }}/> 
      
      </Stack.Navigator> 
    </NavigationContainer> ); 
    } 

export default App;
>>>>>>> 292ae0a7 (login, signup Screen transition)
<<<<<<< HEAD
>>>>>>> 7a12147d (login, signup Screen transition)
=======
=======
});
>>>>>>> 77c939ac (move to MyTabs from login)
>>>>>>> 7e036b58 (move to MyTabs from login)
