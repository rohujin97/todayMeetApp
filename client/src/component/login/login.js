import React, { Component,useState } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image,KeyboardAvoidingView } from 'react-native'; 
import {useDispatch,} from 'react-redux';
let imagePath = require('./logo.jpeg');

const Separator = () => (
    <View style={styles.separator} />
  );
  
  const LoginScreen=({navigation}) => {
    const dispatch=useDispatch();
    const [useremail, setUseremail] = useState("");
    
    return ( 
      
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={{backgroundColor:'white'}}> 
          <Image
              style={{height: 100, width: 100, alignSelf:'center', marginTop: 50}}
              source={imagePath}
              />
          <Text style={{fontSize:22 ,textAlign:'center', marginTop:20,marginBottom:50}}>TodayMeet</Text>
          
          <TextInput 
            onChangeText={text => setUseremail(text)}
            value={useremail}
            style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="E-mail address"></TextInput>
          <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="Password"></TextInput>
          
          <Text
              title="email save"
              style={{marginLeft:100, marginBottom:10}}
              onPress={() => Alert.alert('test!!!!')}>이메일 저장</Text>
          <Button
              
              title="로그인"
              color="#54D2AC"
              
              onPress={() => {
                dispatch({type:"server/join",data:useremail});
                navigation.navigate("MyTabs");
                }}
          />  
          <Separator/>
          <Button
              
              title="회원가입"
              color="#54D2AC"
              onPress={() => {
                navigation.navigate("SIGNUP");
              }}
          />  
        </View>
        </KeyboardAvoidingView>
    )
    
  };

  export default LoginScreen;

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