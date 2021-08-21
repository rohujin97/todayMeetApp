<<<<<<< HEAD
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { io } from 'socket.io-client'

const ChatRoomScreen = ({navigation}) => {
    const [messages, setMessages] = useState([]);
    const socket = useRef(null);

    useEffect(() => {
      socket.current = io("http://172.30.1.60:3001")
      socket.current.on("message", message => {
          console.log(message, "useEffect")
          setMessages(previousMessages => GiftedChat.append(...previousMessages, message));
      })
      }, [])
      
    const onSend = useCallback((messages = []) => {
        console.log(messages, "onSend")
        socket.current.emit("message", messages[0].text);
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, [])
    
    const renderBubble = (props) => {
        return (
        <Bubble 
            {...props}
            wrapperStyle={{
                right: {
                    backgroundColor: '#54D2AC'
                }
            }}
            textStyle={{
                right: {
                    color: '#fff'
                }
            }}
        />
        );
    };

    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons 
                        name='send-circle' 
                        style={{marginBottom:5, marginRight: 5}}
                        size={32} 
                        color='#54D2AC' />
                </View>
            </Send>
        )
    }

    const scrollToBottomComponent = () => {
        return (
            <FontAwesome name='angle-double-down' size={22} color='#333' />
        )
    }

=======
import React, { useState, useCallback, useEffect } from 'react'
import { View, Text } from 'react-native'

const ChatRoomScreen = ({navigation}) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ])
    }, [])
>>>>>>> b62a2012 (use ChatListStyles)
    return (
        <GiftedChat
          renderUsernameOnMessage
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1, //본인
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
      />
    );
}

export default ChatRoomScreen
