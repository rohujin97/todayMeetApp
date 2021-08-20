import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import ChatListScreen from '../component/chat/ChatListScreen';
import io from 'socket.io-client';

function HomeScreen() {
      useEffect(function () {
          io("http://172.30.1.29:3001")
      }, []);
      
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ChatList" component={ChatListScreen} options={{ title: 'TodayMeet' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
    
  
}

export default HomeScreen;