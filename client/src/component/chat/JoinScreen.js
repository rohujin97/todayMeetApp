import React, { useState } from 'react';
import {View, Button, TextInput, Image, Platform, KeyboardAvoidingView} from 'react-native';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';

const JoinScreen = ({ navigation }) => {
    const dispatch = useDispatch();
=======

export default function JoinScreen({ joinChat }){
>>>>>>> 5387c5b8 (adding redux)
    const [username, setUsername] = useState("");
    return (
        <View>
            <TextInput 
                onChangeText={text => setUsername(text)}
                value={username}
                style={{ fontSize: 30, textAlign: "center" }} 
                placeholder="Enter username" 
            />
<<<<<<< HEAD
            <Button 
                title="Join Chat" 
                onPress={() => {
                    dispatch({ type: "server/join", data: username });
                    navigation.navigate("Chat")
                }}
            />
        </View>
    )
}

export default JoinScreen;
=======
            <Button title="Join Chat" onPress={() => joinChat(username)}/>
        </View>
    )
}
>>>>>>> 5387c5b8 (adding redux)
