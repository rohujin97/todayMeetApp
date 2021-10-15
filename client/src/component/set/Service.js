import React, {Component} from 'react';
import { Dimensions,StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,SafeAreaView, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const deviceWidth = Dimensions.get('window').width


const Service=({})=>{
    return(
        <ScrollView>
            <Ionicons name="chevron-back" size={40} style={styles.a_back}  onPress={() => this.goSettingScreen()}/>
            <Text>Service Center:010-0000-0000</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    a_back:{
        marginTop:10,
    },
});

export default Service;