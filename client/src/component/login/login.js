import React, { Component,useState } from 'react'; 
import { View, Text, Button,StyleSheet,TextInput,Alert,Image,KeyboardAvoidingView ,Platform,TouchableOpacity} from 'react-native'; 
import {useDispatch,} from 'react-redux';
let imagePath = require('./logo.jpeg');

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const Separator = () => (
    <View style={styles.separator} />
  );
  
  const LoginScreen=({navigation}) => {
    const dispatch=useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);


    const onLoggedIn = token => {
      fetch(`${API_URL}/private`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`, 
          },
      })
      .then(async res => { 
          try {
              const jsonRes = await res.json();
              if (res.status === 200) {
                  setMessage(jsonRes.message);
              }
          } catch (err) {
              console.log(err);
          };
      })
      .catch(err => {
          console.log(err);
      });
  }
    const onSubmitHandler = () => {
      const payload = {
          email,
          password,
      };
      fetch(`${API_URL}/${'login'}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
      })
      .then(async res => { 
          try {
              const jsonRes = await res.json();
              if (res.status !== 200) {
                  setIsError(true);
                  setMessage(jsonRes.message);
              } else {
                  onLoggedIn(jsonRes.token);
                  setIsError(false);
                  setMessage(jsonRes.message);
                  navigation.navigate("MyTabs");
              }
          } catch (err) {
              console.log(err);
          };
      })
      .catch(err => {
          console.log(err);
      });
  };
  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
}
    return ( 
      
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
    <View style={{backgroundColor:'white'}}> 
          <Image
              style={{height: 100, width: 100, alignSelf:'center', marginTop: 50}}
              source={imagePath}
              />
          <Text style={{fontSize:22 ,textAlign:'center', marginTop:20,marginBottom:50}}>TodayMeet</Text>
          
          <TextInput 
            onChangeText={text => setEmail(text)}
            value={email}
            style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="E-mail address"></TextInput>
          <TextInput 
            onChangeText={setPassword}
            value={password}
            style={{width:263,height:46,borderWidth:1, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',textAlign:'center'}}placeholder="Password"></TextInput>
           
           <TouchableOpacity style={styles.button} onPress={() => {
                  navigation.navigate("MyTabs");
                }}>
                            <Text style={styles.buttonText}>로그인</Text>
                        </TouchableOpacity>
            
          <Separator/>
          <View style={{ flexDirection: "row" }}>
          <Text
              numberOfLines={1}
              style={{flex: 1,color:"black" ,marginHorizontal:50,textAlign: "left"}}
              title="회원가입"
              color="black"
              onPress={() => {
                navigation.navigate("SIGNUP");
              }}>회원가입</Text>
          <Text
              style={{color:"black" ,textAlign: "right",marginHorizontal:50}}
              title="비밀번호 찾기"
              color="black"
              onPress={() => {
                navigation.navigate("SIGNUP");
              }}>비밀번호 찾기</Text>
          </View>
            
        </View>
        </KeyboardAvoidingView>
    )
    
  };

  export default LoginScreen;
  /*
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
}*/

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
    button: {
      width: '80%',
      backgroundColor: '#54D2AC',
      height: 40,
      borderRadius: 50,
      justifyContent: 'center',
      alignSelf:'center',
      alignItems: 'center',
      marginVertical: 5,
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '400'
  },
  });