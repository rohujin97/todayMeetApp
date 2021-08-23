<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { View } from 'react-native'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { io } from 'socket.io-client'
import JoinScreen from './JoinScreen'

const ChatRoomScreen = ({navigation}) => {
<<<<<<< HEAD
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
=======
import React, { useState, useCallback, useEffect, useRef } from 'react'
import { View } from 'react-native'
>>>>>>> 76053e48 (client send messages to server)
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { io } from 'socket.io-client'

const ChatRoomScreen = ({navigation}) => {
    // const [messages, setMessages] = useState([]);
=======
>>>>>>> 5387c5b8 (adding redux)
    const [messages, setMessages] = useState([]);
    const [hasJoined, setHasJoined] = useState(false);
    const socket = useRef(null);

    useEffect(() => {
      socket.current = io("http://172.30.1.18:3001")
      socket.current.on("message", message => {
        setMessages(previousMessages => GiftedChat.append(...previousMessages, message));
      })
      }, [])
      
    const onSend = useCallback((messages = []) => {
      console.log(messages);
      socket.current.emit("message", messages[0].text);
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, [])
<<<<<<< HEAD
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
=======

      

    const joinChat = username => {
      socket.current.emit("join", username);
      setHasJoined(true);
    }
    
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

    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
    />
    )
>>>>>>> a7009bf8 (chat ui 95% complete)
=======
      <View style={{ flex:1 }}>
        {hasJoined ? (
          <GiftedChat
            renderUsernameOnMessage
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
        ) : (
          <JoinScreen joinChat={joinChat}/>
        )}
      </View>
=======
        <GiftedChat
          renderUsernameOnMessage
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          alwaysShowSend
          renderSend={renderSend}
          scrollToBottom
          scrollToBottomComponent={scrollToBottomComponent}
      />
>>>>>>> 7e036b58 (move to MyTabs from login)
    );
>>>>>>> 5387c5b8 (adding redux)
}

export default ChatRoomScreen
