import React, { Component,useState } from 'react'; 
import { View, Text,TextInput,StyleSheet,Button,Alert,Image,KeyboardAvoidingView,Platform,ScrollView } from 'react-native'; 
let imagePath = require('./logo.jpeg');
import {useDispatch,} from 'react-redux';
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const SignUpScreen=({navigation}) => {
    
      const [email, setEmail] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [phone, setPhone] = useState('');

      const [isError, setIsError] = useState(false);
      const [message, setMessage] = useState('');

      const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, 
            },
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status === 200) {
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
    };

      const onSignUpHandler = () => {
        const payload = {
            email,
            name,
            phone,
            password,
        };
        fetch(`${API_URL}/${'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(async res => { 
            try {
                const jsonRes = await res.json();
                if (res.status !== 200) {
                    setIsError(true);
                    setMessage(jsonRes.message);
                } else {
                    onLoggedIn(jsonRes.token);
                    setIsError(false);
                    setMessage(jsonRes.message);
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
      };

        return ( 
          
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
        <View style={{backgroundColor:'white'}}> 
            <Image
                style={{height: 100, width: 100, alignSelf:'center', marginTop: 20}}
                source={imagePath}
                />
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginBottom:20}}>Sign Up</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="이름" placeholderTextColor="#000000" onChangeText={setName}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="메일주소"placeholderTextColor="#000000"  onChangeText={setEmail}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="비밀번호" placeholderTextColor="#000000" secureTextEntry={true} onChangeText={setPassword}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="비밀번호 확인" secureTextEntry={true} placeholderTextColor="#000000" ></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="휴대폰" placeholderTextColor="#000000" onChangeText={setPhone}></TextInput>
            <Text style={[styles.message, {color: isError ? 'red' : 'green'}]}>{message ? getMessage() : null}</Text>
            <Text style={{textAlign:'center', margin:10}}>
                1/2
            </Text>
            <Button
                title="다음"
                color="#54D2AC"
                onPress={() => {
                  navigation.navigate("SIGNUP2");
                }}
            />
            
        </View> 
        </ScrollView>
        </KeyboardAvoidingView>
        
        );
    } 
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      
      backgroundColor:'white',
      
    },
    title: {
      textAlign: 'center',
      fontSize:18,
      marginVertical: 8,
      marginTop:10,
      marginBottom:10,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
  });

export default SignUpScreen;