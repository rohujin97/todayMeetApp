import React, { useEffect, useRef, useState } from 'react';
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


const Tab = createBottomTabNavigator();
const MyTabs = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].name : '';
    if(routeName === 'Chat'){
      return false;
    }
    return true;
  };
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
      <Tab.Screen 
        name="Messages" 
        component={ChatStackScreen} 
        options={({route}) => ({
          tabBarVisible: getTabBarVisibility(route),
          // tabBarVisible: route.state @ route.state.index === 0,
          tabBarIcon: ({ color }) => (
            <Icon name='chatbubble-outline' size={22} color={color} />
          ),
        })}
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
const Stack = createStackNavigator();
export default function MainScreen({ navigation }) {
    const [hasJoined, setHasJoined] = useState(false);
    const socket = useRef(null);
    const signHome = useremail => {
      socket.current.emit("signup", useremail);
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