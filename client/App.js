import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import UserList from './src/component/UserList/UserList'
import ChatListScreen from './src/component/chat/chatList';
// import StackUtils from 'stack-utils';

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatListScreen} options={{ title: '채팅리스트' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;