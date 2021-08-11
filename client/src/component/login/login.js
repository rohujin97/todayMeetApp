<<<<<<< HEAD
import React, { Component, useState } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
import { useDispatch } from 'react-redux';
=======
import React, { Component } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
>>>>>>> 7a12147d (login, signup Screen transition)
let imagePath = require('./logo.jpeg');

const Separator = () => (
    <View style={styles.separator} />
<<<<<<< HEAD
    );
    
    const LoginScreen = ({ navigation }) => {
      const dispatch = useDispatch();
      const [useremail, setUseremail] = useState("");
      return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white'}}> 
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
                dispatch({ type: "server/join", data: useremail });
                navigation.navigate("MyTabs");
              }}
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
          {/* <KeyboardAvoidingView behavior="padding" />  */}
      </View> 
      
      ); 
}
// export default class LoginScreen extends Component { 
//     render() { 
//     } 
//     goSignUpScreen(){ // DetailScreen으로 화면 이동 
//         this.props.navigation.navigate('SIGNUP'); 
//     } 
// }
=======
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
>>>>>>> 7a12147d (login, signup Screen transition)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
<<<<<<< HEAD
      backgroundColor:'white'
    },
    title: {
      textAlign: 'center',
      fontSize:18,
=======
    },
    title: {
      textAlign: 'center',
>>>>>>> 7a12147d (login, signup Screen transition)
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
<<<<<<< HEAD
    
  });

  export default LoginScreen;
=======
  });
>>>>>>> 7a12147d (login, signup Screen transition)
