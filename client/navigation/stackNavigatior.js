import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// 스택 네비게이션 라이브러리 가져오기

import FriendClick from '../src/component/friendclick/friendclick';
import FriendListScreen from '../src/component/friendlist/friendlist';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                backgroundColor: "white",
                borderBottomColor:"white",
                shadowColor:"white",
                height:100
            },
            headerTitleAlign:'left',
            headerTintColor:"#000",
            headerBackTitleVisible: false
        }}
        >
            <Stack.Screen name = "FriendList" component={FriendListScreen}/>
            <Stack.Screen name = "FriendClick" component = {FriendClick} />
        </Stack.Navigator>
    )
}
export default StackNavigator;