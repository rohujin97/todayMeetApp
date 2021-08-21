import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import ChatRoomScreen from './ChatRoomScreen';
import {
    Container,
    Card,
    UserInfo,
    UserImgWrapper,
    UserImg,
    UserName,
    PostTime,
    MessageText,
    TextSection,
    UserInfoText,
} from '../styles/ChatRoomStyles';

const Lists = [
    {
        id: '1',
        userName: '노유진',
        userImg: require('../../assets/zing.jpg'),
        messageTime: '4 mins ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native'
    },
    {
        id: '2',
        userName: '김지후',
        userImg: require('../../assets/bob.jpg'),
        messageTime: '2 hourss ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native'
    },
    {
        id: '3',
        userName: '김민정',
        userImg: require('../../assets/chicken.jpg'),
        messageTime: '8 mins ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native'
    },
    {
        id: '4',
        userName: '강나임',
        userImg: require('../../assets/person.jpg'),
        messageTime: '3 hours ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native'
    },
    {
        id: '5',
        userName: '윤건희',
        userImg: require('../../assets/bear.jpg'),
        messageTime: '4 days ago',
        messageText: 'Hey there, this is my test for a post of my social app in React Native'
    }
];

export default class ChatListScreen extends Component {
    // navigationOptions 코드
    static navigationOptions={
        title: 'TodayMeet'
    }
    
    render(){
        return (
            <Container>
                <FlatList
                    data={Lists}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => (
                        <Card onPress={() => this.props.navigation.navigate('Chat', {userName: item.userName})}>
                            <UserInfo>
                                <UserImgWrapper>
                                    <UserImg source={item.userImg}/>
                                </UserImgWrapper>
                                <TextSection>
                                    <UserInfoText>
                                        <UserName>{item.userName}</UserName>
                                        <PostTime>{item.messageTime}</PostTime>
                                    </UserInfoText>
                                    <MessageText>{item.messageText}</MessageText>
                                </TextSection>
                            </UserInfo>
                        </Card>
                    )}
                />
            </Container>
        );
    };
};


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});