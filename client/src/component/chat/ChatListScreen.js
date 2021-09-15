import React from 'react';
import { FlatList } from 'react-native';
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

<<<<<<< HEAD
export default ChatListScreen;
=======
export default ChatListScreen;
>>>>>>> 274113618ed9ae2b6c76c0dac38e03197f43c59c
