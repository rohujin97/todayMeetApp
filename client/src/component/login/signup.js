import React, { Component } from 'react'; 
import { View, Text,TextInput,Button,Alert,Image } from 'react-native'; 
let imagePath = require('./logo.jpeg');

export default class SignUpScreen extends Component { 
    render() { 
        return ( 
        <View style={{backgroundColor:'white'}}> 
            <Image
                style={{height: 100, width: 100, alignSelf:'center', marginTop: 50}}
                source={imagePath}
                />
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginBottom:50}}>Sign Up</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="이름"></TextInput>
            <TextInput style={{width:177,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="메일"></TextInput>
            <TextInput style={{width:177,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="인증번호"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="비밀번호"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="휴대폰"></TextInput>
            
            <Text style={{textAlign:'center', margin:10}}>
                1/2
            </Text>
            <Button
                title="다음"
                color="#54D2AC"
                onPress={() => this.goNextSignUpScreen()} 
            />
            
        </View> 
        );
    } 
    goNextSignUpScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SIGNUP2'); 
    }
}