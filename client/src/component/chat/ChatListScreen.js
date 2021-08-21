import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ChatRoomScreen from './ChatRoomScreen';

class ChatListScreen extends Component {
    // constructor(props) {
    //     super(props);
    // }
    // navigationOptions 코드
    static navigationOptions={
        title: 'TodayMeet'
    }
    
    render(){
        return (
            <View style={style.container}>
                <Text>ChatList</Text>
                <Button
                    title="Go to ChatRoom"
                    onPress={() => this.props.navigation.navigate('ChatRoomScreen', {
                        screen: 'ChatRoomScreen',
                        info: 'message'
                    })}
                />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ChatListScreen;