import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../../../data.json'
import Logo from '../logo/logo'
import { Alert } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";



class FriendClick extends Component{

    
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
                    
            <TouchableOpacity onPress = {() =>{alert('명함보내기를 완료하였습니다!')}}>
                {/*명함보내기
           <div>아이콘 제작자 <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a></div>
            명함 아이콘 저작자 표시*/}

            <Image style={{width:26, height:21,marginTop:139,marginLeft:302}} source ={{uri:"https://image.flaticon.com/icons/png/512/259/259074.png"}}/>

            </TouchableOpacity> 
            <View styles = {styles.cardContainer}>
                {
                    friendClick.map((content,i) => {
                        return(
                            <View style = {styles.friend} key = {i}>
                                <View style={{flex:1, justifyContent:"center",alignItems:"center",borderRightColor:"#FDCD15",borderRightWidth:1}}>
                                    <Image style={{width: 74,height:37}} source = {{uri:content.userJobImage}} />
                                </View>
                                <View style= {{flex:2,margin:20}}>
                                <Text >{content.userName}</Text>
                                <Text>{content.userworkAddress}</Text>
                                <Text>Tel:{content.userTelNum}</Text>
                                <Text>Mob:{content.userMobNum}</Text>
                                <Text>Email:{content.userEmail}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            
        </ScrollView>
       
        )
    }
}

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#F2F2F2",
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
          
           marginTop:43,
           width:336,
           height:182,
           marginLeft:10,
           borderRadius:12,
           backgroundColor:"#FFF",
           flexDirection:"row",
           
       },

 
});
  
export default FriendClick;