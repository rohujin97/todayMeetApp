import React, {Component} from 'react';
import {
  Dimensions,ScrollView,View,Button,
    StyleSheet,Text
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width

const ModifyScreen=({})=>{
    const navigation2 = useNavigation(); 
        return (
            <ScrollView style={styles.container}>
        <Text style={styles.name}>성명</Text>
        <Entypo name="circle" size={90} style={styles.circle}/>
        <Entypo name="image" size={25} style={styles.image}/>
        <View style={styles.container3}></View>
        <Text style={styles.job}>직업</Text>
        <View style={styles.container4}></View>
        <Text style={styles.depart}>회사/부서</Text>
        <View style={styles.container5}></View>
        <Text style={styles.depart}>이메일</Text>
        <View style={styles.container5}></View>
        <Text style={styles.depart}>회사번호</Text>
        <View style={styles.container5}></View>
        <Text style={styles.depart}>전화번호</Text>
        <View style={styles.container5}></View>
        <Button title="저장" style={styles.correct} onPress={() => navigation2.navigate('SetPage')}></Button>
        
      </ScrollView>
        );
    
}
 
const styles = StyleSheet.create({
    circle:{
      marginTop:-10,
      marginLeft:30,
    },
    image:{
      marginTop:-20,
      marginLeft:95,
    },
    name:{
      marginTop:30,
      marginLeft:deviceWidth/2-30,
      fontSize:15,
    },
    container3:{
      height: 40,
      width: deviceWidth/2-10,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:-85, 
      marginLeft:deviceWidth/2-30,
      borderRadius:15,
    },
    job:{
      fontSize:15,
      marginTop:20,
      marginLeft:deviceWidth/2-30,
    },
    container4:{
      height: 40,
      width: deviceWidth/2-10,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:10, 
      marginLeft:deviceWidth/2-30,
      borderRadius:15,
    },
    depart:{
      fontSize:15,
      marginTop:20,
      marginLeft:30,
      
    },
    container5:{
      height: 40,
      width: deviceWidth/2+125,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:10, 
      marginLeft:30,
      borderRadius:15,
    },
    correct:{
      marginTop:10,
      marginLeft:40,
    }
  });
export default ModifyScreen;