import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../../../data.json';
import Friend from '../UserList/Friend/Friend';

export default function UserList() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  let friendInfo = data.freindInfo
  return (
    <ScrollView style={styles.container}>
        <StatusBar style="black" />
        <Text style={styles.title}>TodayMeet </Text>
      
    <View style = {styles.UserContainer}>
      {
        friendInfo.map((content,i)=>{
          return (<Friend content={content} key={i}/>)
        })
      }

    </View>
        
    </ScrollView>
   
  )

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff"
  },
title: {
  fontSize: 25,
  marginTop:50,
  marginLeft:20,
  
},
userContainer:{
marginTop:50
},
user:{
  flex:1,
  flexDirection:"row",
  margin:10,
  borderBottomWidth:0.5,
  paddingBottom:10
},
userList:{
  flex:1,
  flexDirection:"row"
},
userImage:{
  flex:1,
  width:70,
  height:70,
  borderRadius:30
},
userText:{
  flex:2,
  flexDirection:"column",
  marginLeft:30
},
userDesc:{
  flex:4
}
});
