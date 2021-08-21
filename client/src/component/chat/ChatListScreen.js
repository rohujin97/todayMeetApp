<<<<<<< HEAD
import React from 'react';
import { FlatList } from 'react-native';
=======
import React, { Component } from 'react';
<<<<<<< HEAD
import { View, Text, Button, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
>>>>>>> 395d211b (db connect with pool and get data from todaymeet schema)
import 'react-native-gesture-handler';
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
} from '../styles/ChatListStyles';

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
        userName: '이민정',
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

<<<<<<< HEAD
const ChatListScreen = ({navigation}) => {
    return (
        <Container>
            <FlatList
                data={Lists}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <Card onPress={() => 
                            navigation.navigate('Chat', {
                            userName: item.userName
                            })}>
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
}

export default ChatListScreen;
=======
export default class ChatListScreen extends Component {
    // navigationOptions 코드
    static navigationOptions={
=======
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
<<<<<<< HEAD
    static navigationOptions ={
>>>>>>> 9cbf13ff (db connect with pool and get data from todaymeet schema)
=======
    static navigationOptions={
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
        title: 'TodayMeet'
    }
    
    render(){
        return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
            <View>
                <Text>ChatListScreen</Text>
=======
            <View style={style.container}>
                <Text>ChatList</Text>
                <Button
                    title="Go to ChatRoom"
                    onPress={() => this.props.navigation.navigate('ChatRoomScreen', {
                        screen: 'ChatRoomScreen',
                        info: 'message'
                    })}
                />
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
            </View>
        )
    }
}

<<<<<<< HEAD
export default ChatListScreen;
>>>>>>> 9cbf13ff (db connect with pool and get data from todaymeet schema)
<<<<<<< HEAD
>>>>>>> 395d211b (db connect with pool and get data from todaymeet schema)
=======
=======
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ChatListScreen;
>>>>>>> 11d516c4 (still move page from chatlist to chatroom)
>>>>>>> 8c273178 (still move page from chatlist to chatroom)
