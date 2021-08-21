import React, { Component } from 'react'; 
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { View, Text,TextInput,Button,Alert } from 'react-native'; 
export default class SignUpScreen extends Component { 
    render() { 
        return ( 
        <View> 
            <Text style={{fontSize:48 ,textAlign:'center', margin:10}}>Sign Up</Text>
            <Text style={{textAlign:'center', margin:10}}>
                개인 정보를 입력해주세요!
            </Text>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="Name"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="E-mail address"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="Password"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="Password confirm"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="Phone number"></TextInput>
>>>>>>> 7a12147d (login, signup Screen transition)
=======
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
>>>>>>> f2fb94ae (front-end modified)
            
            <Text style={{textAlign:'center', margin:10}}>
                1/2
            </Text>
            <Button
<<<<<<< HEAD
<<<<<<< HEAD
                title="다음"
                color="#54D2AC"
=======
                title="Next"
>>>>>>> 7a12147d (login, signup Screen transition)
=======
                title="다음"
                color="#54D2AC"
>>>>>>> f2fb94ae (front-end modified)
                onPress={() => this.goNextSignUpScreen()} 
            />
            
        </View> 
        );
    } 
    goNextSignUpScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SIGNUP2'); 
    }
}