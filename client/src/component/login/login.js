<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, useState } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
import { useDispatch } from 'react-redux';
=======
import React, { Component } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
>>>>>>> 7a12147d (login, signup Screen transition)
=======
import React, { Component, useState } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image } from 'react-native'; 
import { useDispatch } from 'react-redux';
>>>>>>> 7e036b58 (move to MyTabs from login)
let imagePath = require('./logo.jpeg');

const Separator = () => (
    <View style={styles.separator} />
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e036b58 (move to MyTabs from login)
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
<<<<<<< HEAD
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
>>>>>>> 7a12147d (login, signup Screen transition)
=======
}
// export default class LoginScreen extends Component { 
//     render() { 
//     } 
//     goSignUpScreen(){ // DetailScreen으로 화면 이동 
//         this.props.navigation.navigate('SIGNUP'); 
//     } 
// }
>>>>>>> 7e036b58 (move to MyTabs from login)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
<<<<<<< HEAD
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
=======
      backgroundColor:'white'
    },
    title: {
      textAlign: 'center',
      fontSize:18,
>>>>>>> f2fb94ae (front-end modified)
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
<<<<<<< HEAD
    
  });

  export default LoginScreen;
=======
  });
>>>>>>> 7a12147d (login, signup Screen transition)
=======
    
  });
<<<<<<< HEAD
>>>>>>> f2fb94ae (front-end modified)
=======

  export default LoginScreen;
>>>>>>> 7e036b58 (move to MyTabs from login)
