import React, { useState } from 'react';
import {View, Button, TextInput, Image, Platform, KeyboardAvoidingView} from 'react-native';
import { useDispatch } from 'react-redux';

const JoinScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    return (
        <View>
            <TextInput
                onChangeText={text => setUsername(text)}
                value={username}
                style={{ fontSize: 30, textAlign: "center" }}
                placeholder="Enter username"
            />
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