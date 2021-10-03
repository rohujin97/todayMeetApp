import React, { useState, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { View } from 'react-native'
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { io } from 'socket.io-client'

const ChatRoomScreen = ({ navigation, route }) => {

  const dispatch = useDispatch();
  const selfUser = useSelector(state => state.selfUser);
  const conversations = useSelector(state => state.conversations);
  const userId = route.params.userId; //채팅방 주인 id
  const messages = conversations[userId].messages;

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
      <View style={{ flex:1 }}>
          <GiftedChat
            renderUsernameOnMessage
            messages={messages}
            onSend={messages => {
              dispatch({
                type: "private_message",
                data: {message: messages[0], conversationId: userId}
              });
              dispatch({
                type: "server/private_message",
                data: {message: messages[0], conversationId: userId}
              })
              }
            }
            user={{
              _id: selfUser.userId,
            }}
            renderBubble={renderBubble}
            alwaysShowSend
            renderSend={renderSend}
            scrollToBottom
            scrollToBottomComponent={scrollToBottomComponent}
        />
      </View>
    );
}

export default ChatRoomScreen
