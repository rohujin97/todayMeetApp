<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useRef, useState } from 'react';
=======
=======
>>>>>>> 2bb49246 (make chatlist ui)
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView }  from 'react-native';
=======
<<<<<<< HEAD
import React, { Component } from 'react';
import { View, Text, StyleSheet}  from 'react-native';
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import io from 'socket.io-client';
// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import MapTab from './AppTabNavigator/MapTab'
import SetTab from './AppTabNavigator/SetTab'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import ChatListScreen from './chat/ChatListScreen';
>>>>>>> 3c57a5a8 (use ChatListStyles)
import ChatRoomScreen from './chat/ChatRoomScreen';
// import ChatStack from '../navigation/ChatStack'

const ChatStack = createStackNavigator();

const ChatStackScreen = () => {
  return(
    <ChatStack.Navigator>
        <ChatStack.Screen name="List" component={ChatListScreen} />
        <ChatStack.Screen 
          name="Chat" 
          component={ChatRoomScreen} 
          options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: false
          })}/>
    </ChatStack.Navigator>
  )
};

=======
=======
=======
>>>>>>> cec1bc15 (make chatlist ui)
import React, { useEffect } from 'react';
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login/login'; 
import SignUpScreen from './login/signup'; 
import SignUp2Screen from './login/signup2'; 
import DoneScreen from './login/done'; 


// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import MapTab from './AppTabNavigator/MapTab'
import SetTab from './AppTabNavigator/SetTab'
import ChatListScreen from './chat/ChatListScreen';
import ChatRoomScreen from './chat/ChatRoomScreen';
import JoinScreen from './chat/JoinScreen';
import { io } from 'socket.io-client';
// import ChatStack from '../navigation/ChatStack'

const ChatStack = createStackNavigator();

const ChatStackScreen = ({navigation}) => {
  return(
    <ChatStack.Navigator>
        <ChatStack.Screen name="List" component={ChatListScreen} />
        <ChatStack.Screen 
          name="Chat" 
          component={ChatRoomScreen} 
          options={({route}) => ({
            title: route.params.userName,
            headerBackTitleVisible: false,
          })}/>
    </ChatStack.Navigator>
  )
};

<<<<<<< HEAD
>>>>>>> 7102a15a (still move page from chatlist to chatroom)
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)

=======
>>>>>>> cec1bc15 (make chatlist ui)
const Tab = createBottomTabNavigator();
const MyTabs = () => {
<<<<<<< HEAD
  const getTabBarVisibility = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : '';
    if(routeName === 'Chat'){
      return false;
    }
    return true;
  };
=======
>>>>>>> b62a2012 (use ChatListStyles)
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#54D2AC', }}>
      <Tab.Screen name="Home" component={HomeTab} options={{
<<<<<<< HEAD
<<<<<<< HEAD
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name='home-outline' size={22} color={color} />
=======
=======
>>>>>>> 2bb49246 (make chatlist ui)
<<<<<<< HEAD
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name='home-outline' size={22} color={color} />
=======
<<<<<<< HEAD
=======
>>>>>>> cec1bc15 (make chatlist ui)
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name='home-outline' size={22} color={color} />
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
          ),
        }}
      />
      <Tab.Screen name="Map" component={MapTab} options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => (
            <Icon name='navigate-circle-outline' size={22} color={color} />
          ),
        }}
<<<<<<< HEAD
      />
      <Tab.Screen 
        name="Messages" 
        component={ChatStackScreen} 
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // tabBarVisible: route.state @ route.state.index === 0,
          tabBarIcon: ({ color }) => (
            <Icon name='chatbubble-outline' size={22} color={color} />
=======
<<<<<<< HEAD
        />
      <Tab.Screen name="Chat" component={ChatTab}  options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => (
          <Icon name='chatbubble-outline' size={22} color={color} />
=======
      />
      <Tab.Screen name="Chat" component={ChatStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <Icon name='chatbubble-outline' size={22} color={color} />
>>>>>>> 3c57a5a8 (use ChatListStyles)
>>>>>>> b62a2012 (use ChatListStyles)
          ),
        })}
      />
      <Tab.Screen name="Settings" component={SetTab}  options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name='person-outline' size={22} color={color} />
          ),
        }}
<<<<<<< HEAD
      />
=======
<<<<<<< HEAD
        />
=======
      />
<<<<<<< HEAD
=======
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name='home-outline' size={22} color={color} />
          ),
        }}
        />
      <Tab.Screen name="Map" component={MapTab} options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <Icon name='navigate-circle-outline' size={22} color={color} />
          ),
        }}
        />
      <Tab.Screen name="Chat" component={ChatTab}  options={{
        tabBarLabel: 'Chat',
        tabBarIcon: ({ color }) => (
          <Icon name='chatbubble-outline' size={22} color={color} />
          ),
        }}
        />
      <Tab.Screen name="Settings" component={SetTab}  options={{
        tabBarLabel: 'Settings',
        tabBarIcon: ({ color }) => (
          <Icon name='person-outline' size={22} color={color} />
          ),
        }}
        />
>>>>>>> 7102a15a (still move page from chatlist to chatroom)
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
<<<<<<< HEAD
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
=======
=======
>>>>>>> cec1bc15 (make chatlist ui)
>>>>>>> 2bb49246 (make chatlist ui)
    </Tab.Navigator>
  );
}
<<<<<<< HEAD
const Stack = createStackNavigator();
export default function MainScreen({ navigation }) {
    const [hasJoined, setHasJoined] = useState(false);
    const socket = useRef(null);
    const signHome = userEmail => {
      socket.current.emit("signup", userEmail);
      setHasJoined(true);
    }
    
    return (
      <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen signHome={signHome} name="LOGIN" component={LoginScreen} options={{ title: '로그인' }}/>
          <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown: false}}/>
          <Stack.Screen name="SIGNUP" component={SignUpScreen} options={{ title: '회원가입1' }}/> 
          <Stack.Screen name="SIGNUP2" component={SignUp2Screen} options={{ title: '회원가입2' }}/> 
          <Stack.Screen name="DONE" component={DoneScreen} options={{ title: '완료' }}/> 
      </Stack.Navigator>
    );
=======

<<<<<<< HEAD
<<<<<<< HEAD
const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Chat" component={ChatRoomScreen} />
  </Stack.Navigator>
);
=======
<<<<<<< HEAD
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)

<<<<<<< HEAD
const socket = io("http://172.30.1.29:3001"); // server 포트 사용
export default function MainScreen() {
      useEffect(function () {
          io("http://172.30.1.17:3001")
      }, []);
      
    return (
      <MyTabs />
    )
=======
function MainScreen () {
  return (
      <MyTabs />
    );
<<<<<<< HEAD
>>>>>>> 645ebf9b (현재 위치 표시)
<<<<<<< HEAD
>>>>>>> e924ffea (현재 위치 표시)
=======
=======
=======
=======
>>>>>>> cec1bc15 (make chatlist ui)
const socket = io("http://172.30.1.29:3001"); // server 포트 사용
export default function MainScreen() {
      useEffect(function () {
          io("http://172.30.1.17:3001")
      }, []);
      
    return (
      <MyTabs />
<<<<<<< HEAD
    )
<<<<<<< HEAD
>>>>>>> 7102a15a (still move page from chatlist to chatroom)
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
<<<<<<< HEAD
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
=======
=======
>>>>>>> cec1bc15 (make chatlist ui)
<<<<<<< HEAD
>>>>>>> 2bb49246 (make chatlist ui)
=======
=======
    );
>>>>>>> 3c57a5a8 (use ChatListStyles)
>>>>>>> b62a2012 (use ChatListStyles)
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
<<<<<<< HEAD
});
<<<<<<< HEAD
=======
});
export default MainScreen;
>>>>>>> 645ebf9b (현재 위치 표시)
=======
export default MainScreen;
=======
});
>>>>>>> 7102a15a (still move page from chatlist to chatroom)
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
=======
});

>>>>>>> cec1bc15 (make chatlist ui)
