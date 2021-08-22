import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SearchBar } from 'react-native-elements';
import data from '../../../data.json'

let imagePath = require('./chunsikfriend.png');

class FriendListScreen extends Component{
    state = {
        search:'',
    };

    

    updateSearch= (search) =>{
        this.setState({search})
    };
    render(){
        let friendinfo = data.freindInfo
        const {search} = this.state; 
        return(
                 
            <ScrollView style="container"> 
                <StatusBar style="black" /> 
                <Text style={styles.topLetter}>TodayMeet</Text>
                <View style={{
                    marginTop:10,
                    width:360,
                    borderBottomColor: '#54D2AC',
                    borderBottomWidth: 1,
                    marginBottom:12
                }}/>
                <View style={styles.searchBarContainer}>
                    <SearchBar lightTheme={true} placeholder="지인을 검색하세요" onChangeText={this.updateSearch} value={search} platform="false"/>
                </View>
                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('FriendClick')}}>
                    <View style={styles.userContainer}>
                        
                        {
                           friendinfo.map((content,i) =>{
                               return(
                                   <View>
                                       <Image style={styles.userImage} source = {{uri:content.image}} />
                                       <Text style = {styles.userName}>{content.name}</Text>
                                       <View style = {styles.userDecs}>
                                            <Text style = {styles.userWork}>{content.work}</Text>
                                            <Text style = {styles.userPosition}>{content.position}</Text>   
                                        </View>
                                </View>
                               )
                           })
                        }
                    

    
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F2F2F2"
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
   searchBarContainer:{
       width:336,
       height:31,
       marginLeft:18,
       marginBottom:36
   },
   userContainer:{
   
       marginLeft:20,
       marginTop:36
   },
   userImage:{
    width:44,
    height:44,
    borderRadius:30
   },
   userName:{
        marginLeft:12,
        width: 46,
        height: 22,
    fontSize:15,
fontWeight:"bold",
marginTop:17 },
userDecs:{
    marginLeft:83,
    width:133,
    height:44,
    marginTop:3,
    fontSize:15,
    fontWeight:"bold"
}
});
  
export default FriendListScreen;