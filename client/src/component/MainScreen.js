import React, { Component } from 'react';
import { View, Text, StyleSheet}  from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
// 하단 탭에 들어갈 컴포넌트들
import HomeTab from './AppTabNavigator/HomeTab'
import MapTab from './AppTabNavigator/MapTab'
import ChatTab from './AppTabNavigator/ChatTab'
import SetTab from './AppTabNavigator/SetTab'

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


function MainScreen () {
  return (
      <MyTabs />
    );
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
export default MainScreen;