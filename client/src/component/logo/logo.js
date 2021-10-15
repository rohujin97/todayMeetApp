import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';

class Logo extends Component{
    render(){
        <View>
                <Text style={styles.topLetter}>TodayMeet</Text>
                    <View style={{
                        marginTop:10,
                        width:360,
                        borderBottomColor: '#54D2AC',
                        borderBottomWidth: 1,
                        marginBottom:12
                     }}/>
        </View>
    }
}

const styles = StyleSheet.create
({
    topLetter:{
        width: 152,
        height: 30,
        marginLeft: -3,
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 26,
        textAlign: "center"
           }
})
export default Logo;