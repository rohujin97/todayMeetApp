import React, { Component } from 'react'; 
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
            
            <Text style={{textAlign:'center', margin:10}}>
                1/2
            </Text>
            <Button
                title="Next"
                onPress={() => this.goNextSignUpScreen()} 
            />
            
        </View> 
        );
    } 
    goNextSignUpScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SIGNUP2'); 
    }
}