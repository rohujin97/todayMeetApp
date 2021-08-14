import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function MeetingDetail() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    <ScrollView style = {styles.container}>
      <View style = {styles.Info}>
          <Text style = {styles.InfoTitle}>인원</Text>
          <Text style = {styles.InfoDecs}>강나임 대리 외 3명</Text>
      </View>
      <View style = {styles.Info}>
        <Text style = {styles.InfoTitle}>인원</Text>
        <Text style = {styles.InfoDecs}>강나임 대리 외 3명</Text>
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    },
    Info:{
        flex:1,
        flexDirection:"row",
        marginTop:100,
        marginLeft:30
    },

    InfoTitle:{
        fontSize:30,
        flex:1

    },
    InfoDecs:{
        flex:4,
        fontSize:30,
    }


})