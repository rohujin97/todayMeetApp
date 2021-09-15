import React, { Component } from 'react';
import { View, Text,TextInput,Button,Alert,StyleSheet,Image,KeyboardAvoidingView,ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
let imagePath = require('./logo.jpeg');

export default class SignUp2Screen extends Component {
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

                        <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="회사이름"></TextInput>
                        <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="부서"></TextInput>
                        <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="직업/직급"></TextInput>
                        <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="회사번호"></TextInput>
                        <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:15, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="팩스번호"></TextInput>

                        <Text style={{textAlign:'center', margin:10}}>
                            2/2
                        </Text>
                        <Button
                            title="등록"
                            color="#54D2AC"
                            onPress={() => this.goDoneScreen()}
                        />

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
    goDoneScreen(){ // DetailScreen으로 화면 이동
        this.props.navigation.navigate('DONE');
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