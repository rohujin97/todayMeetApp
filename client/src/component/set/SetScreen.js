import React, {Component} from 'react';
import { Dimensions,StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView, Button} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../../../data.json'
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get('window').width

const SetScreen=({})=>{
        const navigation = useNavigation(); 
        const navigation_c = useNavigation(); 
        const navigation_s=useNavigation();
        let friendClick = data.friendClick
        return (
            <ScrollView>
                 <View styles = {styles.cardContainer}>
                {
                    friendClick.map((content,i) => {
                        return(
                            <View style = {styles.friend} key = {i}>
                                <View style={{flex:1, justifyContent:"center",alignItems:"center",borderRightColor:"#FDCD15",borderRightWidth:1}}>
                                    <Image style={{width: 74,height:37}} source = {{uri:content.userJobImage}} />
                                </View>
                                <View style= {{flex:2,margin:20}}>
                                <Text style={{marginTop:8,fontSize:17,marginBottom:4}}>{content.userName}</Text>
                                <Text style={{fontSize:15,marginBottom:4}}>{content.userworkAddress}</Text>
                                <Text style={{fontSize:15,marginBottom:4}}>Tel:{content.userTelNum}</Text>
                                <Text style={{fontSize:15,marginBottom:4}}>Mob:{content.userMobNum}</Text>
                                <Text style={{fontSize:15,marginBottom:4}}>Email:{content.userEmail}</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <Button title="수정하기"
                color="#54D2AC"
                onPress={() => navigation.navigate('MODIFY')}
            />

            <Icon name="notifications-outline" size={70} style={styles.alarm}
                onPress={() => navigation.navigate('ALARM')}
            ></Icon>

            <Icon name="toggle-outline" size={70} style={styles.mode}
                onPress={() => navigation.navigate('ALARM')}
            ></Icon>

            <AntDesign name="idcard" size={70} style={styles.id_card}
                onPress={() => navigation.navigate('CUSTOM')}
            />
            <Text style={styles.font6}>명함</Text>
            <Text style={styles.font4}>알림</Text>
            <Text style={styles.font7}>모드</Text>
            <Icon name="calendar-outline" size={70} style={styles.calender}
            onPress={() => navigation.navigate('ALARM')}></Icon>
            
            <Icon name="information-circle-outline" size={70} style={styles.information}
            onPress={() => navigation.navigate('ALARM')}/>
            <Icon name="shield-outline" size={70} style={styles.security}
            onPress={() => navigation.navigate('ALARM')}></Icon>
            <Text style={styles.font3}>개인정보</Text>
            <Text style={styles.font4}>달력</Text>
            <Text style={styles.font5}>고객센터</Text>
            </ScrollView>
        );
        
    }
    

 
const styles = StyleSheet.create({
    cardContainer:{
        paddingLeft:20,
    },
    friend:{
        
        marginTop:43,
        width:336,
        height:182,
        marginLeft:deviceWidth/14,
        borderRadius:12,
        backgroundColor:"#FFF",
        flexDirection:"row",
        
    },
    calender:{
        marginTop:50,
        paddingLeft:deviceWidth/2-35,
    },
    information:{
        marginTop:-70,
        paddingLeft:deviceWidth/2+75,
    },
    alarm:{
        marginTop:90,
        paddingLeft:deviceWidth/2-35,
        
    },
    mode:{
        marginTop:-75,
        paddingLeft:deviceWidth/2+75
    },
    id_card:{
        marginTop:-75,
        paddingLeft:deviceWidth/2-150
    },
    security:{
        marginTop:-75,
        paddingLeft:deviceWidth/2-145,
    },

    idcard_name:{
        color:'black',
        fontWeight:'bold',
        fontSize:30,
        marginTop:5,
        
    },
    idcard_job:{
        color:'black',
        marginTop:10,
        fontSize:15,
    },
    idcard_detail:{
        color:'black',
        marginTop:8,
        fontSize: 17,

    },

    container2: {
        width:110,
        backgroundColor:'rgb(0,100,0)',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginHorizontal:130,
        marginLeft:deviceWidth/4,
        
        },
        font1:{
            fontSize:20,
            color:"#fff",
      
        },
    font2:{
        fontSize:21,
        color:"rgb(0,0,0)",
        //fontWeight:'bold',
        marginLeft:deviceWidth/2-135,
    },
    font3:{
        fontSize:21,
        color:"rgb(0,0,0)",
        //fontWeight:'bold',
        marginLeft:deviceWidth/2-145,
    },
    font4:{
        fontSize:21,
        color:"rgb(0,0,0)",
        //fontWeight:'bold',
        marginLeft:deviceWidth/2-17,
        marginTop:-21,
    },
    font5:{
        fontSize:21,
        color:"rgb(0,0,0)",
        //fontWeight:'bold',
        marginLeft:deviceWidth/2+72,
        marginTop:-21,
    },
    font6:{
        fontSize:21,
        marginLeft: deviceWidth/2-130,
        //fontWeight:'bold',
        marginTop:10,
    },
    font7:{
        fontSize:21,
        marginLeft:deviceWidth/2+90,
        marginTop:-22,
    }
});
export default SetScreen;