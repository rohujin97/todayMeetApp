import React, { Component } from 'react'; 
import { View, Text,TextInput,Button,Alert,Image } from 'react-native'; 
let imagePath = require('./logo.jpeg');
export default class DoneScreen extends Component { 
    render() { 
        return ( 
        <View> 
            
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginTop:200}}>Done</Text>
            <Text style={{textAlign:'center', margin:10}}>
                회원가입이 완료되었습니다.
            </Text>
            <Button
                title="로그인하러 가기"
                color="#FFF065"
                onPress={() => this.goLoginScreen()}
            />
            
        </View> 
        );
    } 
    goLoginScreen(){ // 화면 이동 
        this.props.navigation.navigate('LOGIN'); 
    }
}