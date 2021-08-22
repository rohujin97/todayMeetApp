import React, { useState } from 'react';
import {View, Button, TextInput, Image, Platform, KeyboardAvoidingView} from 'react-native';

export default function JoinScreen({ joinChat }){
    const [username, setUsername] = useState("");
    return (
        <View>
            <TextInput 
                onChangeText={text => setUsername(text)}
                value={username}
                style={{ fontSize: 30, textAlign: "center" }} 
                placeholder="Enter username" 
            />
            <Button title="Join Chat" onPress={() => joinChat(username)}/>
        </View>
    )
}