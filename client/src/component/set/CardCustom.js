import React, {Component} from 'react';
import { Dimensions,StyleSheet, KeyboardAvoidingView, Text, View, Image,TouchableOpacity, FlatList, ScrollView, TextInput,SafeAreaView, Button, useColorScheme, TextPropTypes, Modal} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import data from '../../../data.json'
import 'react-native-gesture-handler';

 
const deviceWidth = Dimensions.get('window').width



export default class CardCustom extends React.Component { 
    COLORS=[
        "#FFF",
        "#5CD859",
        "#24A6D9",
        "#595BD9",
        "#8022D9",
        "#D159D8",
        "#D85964",
        "#D99559",
        "rgb(1,1,1)",
    ];

    state = {
        color:this.COLORS[0],
        text_color:this.COLORS[8],
    };

    RenderColors=()=>{
        return this.COLORS.map(color=>{
            return(
                <TouchableOpacity 
                key={color} 
                style={[styles.colorSelect, 
                    {backgroundColor:color}]}
                onPress={()=> this.setState({color})}
                />
            );
        });
    }
    
    
    render() { 
        
        let friendClick=data.friendClick
        
        return ( 
            <KeyboardAvoidingView behavior="padding">
            <View styles = {styles.cardContainer}>
            {
                friendClick.map((content,i) => {
                    return(
                        <View style = {{backgroundColor:this.state.color,
                            marginTop:43,
                            width:336,
                            height:182,
                            marginLeft:deviceWidth/14,
                            borderRadius:12,
                            flexDirection:"row",
                        }} key = {i}>
                            <View style={{flex:1, justifyContent:"center",alignItems:"center",borderRightColor:"#FDCD15",borderRightWidth:1}}>
                                <Image style={{width: 74,height:37}} source = {{uri:content.userJobImage}} />
                            </View>
                            <View style= {{flex:2,margin:20}}>
                            <Text style={{color:this.state.text_color, marginTop:8,fontSize:17,marginBottom:4}}>{content.userName}</Text>
                            <Text style={{color:this.state.text_color,fontSize:15,marginBottom:4}}>{content.userworkAddress}</Text>
                            <Text style={{color:this.state.text_color,fontSize:15,marginBottom:4}}>Tel:{content.userTelNum}</Text>
                            <Text style={{color:this.state.text_color,fontSize:15,marginBottom:4}}>Mob:{content.userMobNum}</Text>
                            <Text style={{color:this.state.text_color,fontSize:15,marginBottom:4}}>Email:{content.userEmail}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
        <View style={{marginTop:50}}></View>
        
        <Text style={styles.text}>명함 배경색 설정</Text>

        <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:12}}>
            {this.RenderColors()}
        </View>

        <Text style={styles.text}>텍스트 색 설정</Text>
        <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:12}}>
            {this.COLORS.map(text_color=>{
            return(
                <TouchableOpacity 
                key={text_color} 
                style={[styles.colorSelect, 
                    {backgroundColor:text_color}]}
                onPress={()=> this.setState({text_color})}
                />
            );
        })
    }
        </View>
        <TouchableOpacity style={[styles.correct_container, {backgroundColor:'#54D2AC'}]} 
        onPress={() => this.goSettingScreen()}>
          <Text style={styles.correct}>저장하기</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        );
    } 
    goSettingScreen(){ // DetailScreen으로 화면 이동 
        this.props.navigation.navigate('SetPage'); 
    }
    
}

const styles= StyleSheet.create({
    text_style:{
        fontSize:15,
        marginBottom:4,

    },
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
    
    colorSelect:{
        width:25,
        height:25,
        borderRadius:4,
        
    },
    text:{
        marginTop:10,
        marginLeft:11,
        fontSize:18,
        
    },
    correct:{
        fontSize:20,
        marginTop:9,
        marginLeft:(deviceWidth/4+deviceWidth/8)/11,
        color:'white',
      },
      correct_container:{
        marginTop:30,
        height: 40,
        width: deviceWidth/4,
        marginLeft:deviceWidth/4+deviceWidth/8,
        borderRadius:15,
  
      }
});