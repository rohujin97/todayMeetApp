import React, { Component } from 'react'; 
import { View, Text,TextInput,StyleSheet,Button,Alert,Image,KeyboardAvoidingView,ScrollView } from 'react-native'; 
let imagePath = require('./logo.jpeg');

export default class SignUpScreen extends Component { 
    _scrollToInput = (reactNode) => {
        this.scroll.props.scrollToFocusedInput(reactNode)
      }
    render() { 
        return ( 
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
        <View style={{backgroundColor:'white'}}> 
            <Image
                style={{height: 100, width: 100, alignSelf:'center', marginTop: 20}}
                source={imagePath}
                />
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginBottom:20}}>Sign Up</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="이름"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="메일주소"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="비밀번호"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="비밀번호 확인"></TextInput>
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
        </ScrollView>
        </KeyboardAvoidingView>
        );
    } 
    goNextSignUpScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SIGNUP2'); 
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