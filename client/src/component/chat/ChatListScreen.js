import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
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


const ChatListScreen = ({navigation}) => {
    const usersOnline = useSelector(state => state.usersOnline);

    return (
        <Container>
            <FlatList
                data={usersOnline}
                keyExtractor={item=>item.id}
                renderItem={({item}) => (
                    <Card onPress={() => 
                            navigation.navigate('Chat', {
                              userId: item.userId,
                            userName: item.userName
                            })}>
                        <UserInfo>
                            <UserImgWrapper>
                                {/*<UserImg source={require('../../assets/bob.jpg')}/>*/}
                                <UserImg
                                  source={{uri: item.avatar}}
                                  style={{width: 50, height: 50}}/>
                            </UserImgWrapper>
                            <TextSection>
                                <UserInfoText>
                                    <UserName>{item.userName}</UserName>
                                    {/*<PostTime>{item.}</PostTime>*/}
                                </UserInfoText>
                                {/*<MessageText>{item.messageText}</MessageText>*/}
                            </TextSection>
                        </UserInfo>
                    </Card>
                )}
            />
        </Container>
    );
}

export default ChatListScreen;

