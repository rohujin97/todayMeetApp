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
    return (
        <View>
            <Text>ChatRoom</Text>
        </View>
    )
}

export default ChatRoomScreen
