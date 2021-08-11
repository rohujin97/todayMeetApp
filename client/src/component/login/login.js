import React, { Component } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
let imagePath = require('./logo.jpeg');

const Separator = () => (
    <View style={styles.separator} />
  );
  
export default class LoginScreen extends Component { 
    render() { 
        return ( 
        <View> 
            <Image
                style={{height: 150, width: 150, alignSelf:'center', marginTop: 30}}
                source={imagePath}
                />
            <Text style={{fontSize:48 ,textAlign:'center', marginTop:20}}>TodayMeet</Text>
            <Text style={styles.title}>
                TodayMeet와 함께 미팅 일정을 관리해보세요!
            </Text>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:15, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="E-mail address"></TextInput>
            <TextInput style={{width:300,height:40,borderWidth:1, marginBottom:30, borderColor:"gray",color:"gray", alignSelf:'center',textAlign:'center'}}defaultValue="Password"></TextInput>
            <Button
                title="Login"
                onPress={() => Alert.alert('Login test!!!!')}
            />
            <Separator />
            <Button
                title="sign up"
                color="#f194ff"
                onPress={() => this.goSignUpScreen()} 
            />

            
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
    },
    title: {
      textAlign: 'center',
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