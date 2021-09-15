import React from "react"
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function Friend({content}) {
    return (
        
        <View style={styles.user}>
            <TouchableOpacity style={styles.userList}>
                <Image style={styles.userImage} source={{uri:content.image}}/>  
                <Text style={styles.userName}>{content.name}</Text>
                <Text style={styles.userWork}>{content.work}</Text>
                <Text style={styles.userPosition}>{content.position}</Text>
             </TouchableOpacity> 
        </View>
        

      )
}

const styles = StyleSheet.create({

    
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
        userName:{
          flex:2,
          flexDirection:"column",
          marginLeft:30
        },
        userWork:{
          flex:4
        },
        userPosition:{
           
        }
})