import React, { useState } from 'react';
import {View, Button, TextInput, Image, Platform, KeyboardAvoidingView} from 'react-native';
<<<<<<< HEAD
<<<<<<< HEAD
import { useDispatch } from 'react-redux';

const JoinScreen = ({ navigation }) => {
    const dispatch = useDispatch();
=======

export default function JoinScreen({ joinChat }){
>>>>>>> 5387c5b8 (adding redux)
=======
import { useDispatch } from 'react-redux';

const JoinScreen = ({ navigation }) => {
    const dispatch = useDispatch();
>>>>>>> 3aa3ad78 (re)
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
<<<<<<< HEAD
=======
>>>>>>> 3aa3ad78 (re)
            <Button 
                title="Join Chat" 
                onPress={() => {
                    dispatch({ type: "server/join", data: username });
                    navigation.navigate("Chat")
                }}
            />
<<<<<<< HEAD
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
=======
        </View>
    )
}

export default JoinScreen;
>>>>>>> 3aa3ad78 (re)
