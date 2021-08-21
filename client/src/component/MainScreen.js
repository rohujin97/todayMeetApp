import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, ScrollView }  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
const Stack = createStackNavigator();
import io, { Socket } from 'socket.io-client';
// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import MapTab from './AppTabNavigator/MapTab'
import ChatTab from './chat/ChatListScreen'
import SetTab from './AppTabNavigator/SetTab'
import ChatRoomScreen from './chat/ChatRoomScreen';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#54D2AC', }}>
      <Tab.Screen name="Home" component={HomeTab} options={{
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
    </Tab.Navigator>
  );
}

const MessageStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen name="Chat" component={ChatRoomScreen} />
  </Stack.Navigator>
);

const socket = io("http://172.30.1.29:3001"); // server 포트 사용
export default function MainScreen() {
      useEffect(function () {
          io("http://172.30.1.17:3001")
      }, []);
      
    return (
      <MyTabs />
    )
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
});