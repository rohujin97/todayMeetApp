import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

class ChatListScreen extends Component {
    
    // navigationOptions 코드
    static navigationOptions ={
        title: 'TodayMeet'
    }
    
    render(){
        return (
            <View>
                <Text>ChatListScreen</Text>
            </View>
        )
    }
}

export default ChatListScreen;