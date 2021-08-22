import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Location from 'expo-location'
let gomap = require('./gomap.png');
let workimg = require('./workimage.png')


class DetailMeetingScreen extends Component{
  getLocation = async () => {
    try{
        await Location.requestPermissionAsync();
        const locationData = await Location.getCurrentPositionAsync();
        console.log(locationData)
    }
    catch(error){
        Alert.alert("위치를 찾을 수가 없습니다", "GPS를 확인해 주세요")
    }
  }
    
    render(){
     
      //this.getLocation()

      return(
      
        <ScrollView style={styles.container}>
              <Image source={gomap} style={{width:28, height:28, marginTop:14, marginLeft:315}}/>  
              <Image source={workimg} style={{width:66, height:68, marginTop:28, marginLeft:45, borderRadius:40}}/>
              <View style={styles.meetingDecsContainer}>
              <Text style={styles.meetingDecsName}>인원</Text>
                <Text style={styles.meetingDecsInfo}>강나임 대리 외 4명</Text>
              </View>
              <View style={styles.meetingDecsContainer}>
              <Text style={styles.meetingDecsName}>시간</Text>
                <Text style={styles.meetingDecsInfo}>6월 3일 목요일 14:00</Text>
              </View><View style={styles.meetingDecsContainer}>
              <Text style={styles.meetingDecsName}>장소</Text>
                <Text style={styles.meetingDecsInfo}>101room</Text>
              </View>
              <View style={styles.meetingDecsBox}>
                <View style={styles.boxTextContainer}>
                  <Text style={styles.boxText}>1. 투데이 미팅 앱 홍보 방법 의논{"\n"}
                  2. 내부테스트</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.bottomButton}><Text style={{fontSize:20}}>수정</Text></TouchableOpacity>
        </ScrollView>
    )
    }
    
        
  }


const styles = StyleSheet.create({
   container:{
    backgroundColor:"#f2f2f2" 
   },
   meetingDecsContainer:{
     flexDirection:"row",
     marginLeft:50,
     marginTop:22,
     marginBottom:11
   },
   meetingDecsName:{
    fontSize:18,
    marginTop:2,
    fontWeight:"bold"
   },
   meetingDecsInfo:{
    marginLeft:10, 
    fontSize:18
   },
   meetingDecsBox:{
    width:270,
    height:286,
    backgroundColor:"#EEEEEE",
    borderRadius:12,
    marginTop:11,
    marginLeft:45
   },
   boxTextContainer:{
     marginTop:20,
     marginLeft:11,
     marginRight:16,
     marginBottom:17
   },
   boxText:{
     fontSize:18
   },
   bottomButton:{
     backgroundColor:"#54D2AC",
     width:57,
     height:33,
     borderRadius:10,
     marginLeft:258,
     marginTop:21,
     flex: 1,
    justifyContent: "center",
    alignItems: "center"
   }
  });

export default DetailMeetingScreen;