import React, { Component } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
let imagePath = require('./logo.jpeg');

const Separator = () => (
    <View style={styles.separator} />
  );
  
export default class LoginScreen extends Component { 
    render() { 
        return ( 
        <View style={{backgroundColor:'white'}}> 
            <Image
                style={{height: 100, width: 100, alignSelf:'center', marginTop: 50}}
                source={imagePath}
                />
            <Text style={{fontSize:22 ,textAlign:'center', marginTop:20,marginBottom:50}}>TodayMeet</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="E-mail address"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="Password"></TextInput>
            
            <Text
                title="email save"
                style={{marginLeft:100, marginBottom:10}}
                onPress={() => Alert.alert('test!!!!')}>이메일 저장</Text>
            <Button
                
                title="로그인"
                color="#54D2AC"
                onPress={() => Alert.alert('Login test!!!!')}
            />
           

            <Text
                title="sign up"
                style={{marginTop:15,marginLeft:100}}
                onPress={() => this.goSignUpScreen()}>회원가입
                <Text>                        </Text>
                <Text
                title="email save"
                style={{marginLeft:100}}
                onPress={() => Alert.alert('test!!!!')}>비밀번호 찾기</Text>
            
                </Text>
            
        </View> 
        
        ); 
    } 
    goSignUpScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SIGNUP'); 
    } 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor:'white'
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