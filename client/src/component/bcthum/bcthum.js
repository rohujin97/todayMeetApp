import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView,Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../../../data.json'
import Logo from '../logo/logo'
import { Alert } from 'react-native';


class BcThum extends Component{

    
    render(){
    
    let friendClick = data.friendClick
    
        return(
        
        <ScrollView style = {styles.container}>
            <Text style={styles.topLetter}>TodayMeet</Text>
                    <View style={{
                        marginTop:10,
                        width:360,
                        borderBottomColor: '#54D2AC',
                        borderBottomWidth: 1,
                        marginBottom:12
                     }}/>
                    
            
            <View styles = {styles.cardContainer}>
                {
                    friendClick.map((content,i) => {
                        return(
                            <View style = {styles.friend} key = {i}>
                                <View style={{flex:1, justifyContent:"center",alignItems:"center",borderRightWidth:1,borderRightColor:"#FDCD15"}}>
                                    <Image style={{width: 74,height:37}} source = {{uri:content.userJobImage}} />
                                </View>
                                <View style= {{flex:2,margin:20}}>
                                <Text >{content.userName}</Text>
                                <Text>{content.userworkAddress}</Text>
                                <Text>{content.userTelNum}</Text>
                                <Text>{content.userMobNum}</Text>
                                <Text>{content.userEmail}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <Button title="수정">수정</Button>
            <Button title="다음">다음</Button>
        </ScrollView>
       
        )
    }
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#F2F2F2",
  },
  cardContainer:{
      backgroundColor:"#000"
  },
  topLetter:{
    width: 152,
    height: 30,
    marginLeft: -3,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 22,
    lineHeight: 26,
    textAlign: "center"
       },
       friend:{
          
           marginTop:169,
           width:336,
           height:182,
           marginLeft:10,
           borderRadius:12,
           backgroundColor:"#FFF",
           flexDirection:"row"
       },

 
});
  
export default BcThum;