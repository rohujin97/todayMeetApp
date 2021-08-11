import React, { Component } from 'react'; 
import { View, Text,TextInput,Button,Alert } from 'react-native'; 
export default class SignUp2Screen extends Component { 
    render() { 
        return ( 
        <View> 
            <Text style={{fontSize:48 ,textAlign:'center', margin:10}}>Sign Up</Text>
            <Text style={{textAlign:'center', margin:10}}>
                명함 정보를 입력하여 온라인 명함을 만들어보세요!
            </Text>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="회사 이름"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="부서"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="직급"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="회사번호"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="팩스번호"></TextInput>
            
            <Text style={{textAlign:'center', margin:10}}>
                2/2
            </Text>
            <Button
                title="Done"
                onPress={() => Alert.alert('Login test!!!!')}
            />
            
        </View> 
        );
    } 
}