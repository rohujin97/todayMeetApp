import React, { Component,useState } from 'react'; 
import { View, Text,TextInput,Button,Alert,StyleSheet,Image,KeyboardAvoidingView,Platform,ScrollView } from 'react-native'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
let imagePath = require('./logo.jpeg');

const SignUp2Screen=({navigation}) => { 
      const [company, setCompany] = useState('');
      const [department, setDepartment] = useState('');
      const [level, setLevel] = useState('');
      const [telnum, setTelnum] = useState('');
      const [fax, setFax] = useState('');

      const [isError, setIsError] = useState(false);
      const [message, setMessage] = useState('');

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
    };

      const onBcardHandler = () => {
        const payload = {
            company,
            department,
            level,
            telnum,
            fax,
        };
        //명함생성 함수 만들기
        fetch(`${API_URL}/${'signup'}`, {
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
                }
            } catch (err) {
                console.log(err);
            };
        })
        .catch(err => {
            console.log(err);
        });
      }
        return ( 
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
        <View style={{backgroundColor:'white'}}> 
            <Image
                style={{height: 100, width: 100, alignSelf:'center', marginTop: 20}}
                source={imagePath}
                />
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginBottom:20}}>Sign Up</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="회사이름" placeholderTextColor="#000000" onChangeText={setCompany}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="부서" placeholderTextColor="#000000" onChangeText={setDepartment}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="직업/직급"placeholderTextColor="#000000" onChangeText={setLevel}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="회사번호" placeholderTextColor="#000000" onChangeText={setTelnum}></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1,borderRadius: 50, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}
            placeholder="팩스번호" placeholderTextColor="#000000" onChangeText={setFax}></TextInput>
            
            <Text style={{textAlign:'center', margin:10}}>
                2/2
            </Text>
            <Button
                title="등록"
                color="#54D2AC"
                onPress={() => {
                  navigation.navigate("DONE");
                }}
            />
            
        </View> 
        </ScrollView>
        </KeyboardAvoidingView>
        );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
  export default SignUp2Screen;