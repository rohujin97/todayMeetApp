import React, { Component } from 'react'; 
import { View, Text,TextInput,Button,Alert,Image,StyleSheet } from 'react-native'; 
let imagePath = require('./logo.jpeg');
export default class DoneScreen extends Component { 
    render() { 
        return ( 
        <View style={styles.container}> 
            
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginTop:200}}>Done</Text>
            <Text style={{textAlign:'center', margin:10}}>
                회원가입이 완료되었습니다.
            </Text>
            <View style={styles.button} >
                <Text style={styles.buttonText}
                    title="로그인하러 가기"
                    onPress={() => this.goLoginScreen()}
                
                    
                >로그인하러 가기</Text>
            </View>
        </View> 
        );
    } 
    goLoginScreen(){ // 화면 이동 
        this.props.navigation.navigate('LOGIN'); 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      
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
        width: '50%',
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