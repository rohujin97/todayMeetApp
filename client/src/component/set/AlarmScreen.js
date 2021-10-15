import React, {Component,useState} from 'react';
import {
  Dimensions,ScrollView,View,Button, Switch,
    StyleSheet,Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import FlipToggle from 'react-native-flip-toggle-button';
import SwitchToggle from "react-native-switch-toggle";
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import Toggle from 'react-native-toggle-element';



const deviceWidth = Dimensions.get('window').width


class AlarmScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          switchOn1: false,
          switchOn2: false,
          switchOn4: false
        };
      }

  render(){
    return (
      <ScrollView style={styles.container}>
        
        <Ionicons name="chevron-back" size={40} style={styles.a_back}  onPress={() => this.goSettingScreen()}/>
        <Text style={styles.a_font1}>알림</Text>
        <Text style={styles.a_font2}>알림</Text>
        <SwitchToggle
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
          containerStyle={{
            marginTop: -40,
            marginLeft:deviceWidth/2+90,
            
            width: 80,
            height: 38,
            borderRadius: 25,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          backgroundColorOn='#ccc'
          backgroundColorOff='yellow'

          circleStyle={{
            width: 30,
            height: 30,
            borderRadius: 19,
            backgroundColor: 'white', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn1}
          onPress={this.onPress1}
          circleColorOff='white'
          circleColorOn='#rgb(255,255,255)'
          duration={500}
        />
        <Text style={styles.a_font2}>사운드</Text>
        <SwitchToggle
          containerStyle={{
            marginTop:-40,
            marginLeft:deviceWidth/2+90,
            
            width: 80,
            height: 38,
            borderRadius: 25,
            backgroundColor: '#ccc',
            padding: 5,
          }}
          backgroundColorOn='#ccc'
          backgroundColorOff='yellow'
          circleStyle={{
            width: 30,
            height: 30,
            borderRadius: 19,
            backgroundColor: 'white', // rgb(102,134,205)
          }}
          switchOn={this.state.switchOn2}
          onPress={this.onPress2}
          circleColorOff='white'
          circleColorOn='#rgb(255,255,255)'
          duration={500}
        />
        <Text style={styles.a_font2}>알림음</Text>
        <Text style={styles.a_font2}>미리보기</Text>
        <SwitchToggle
          containerStyle={{
            marginTop: -40,
            marginLeft:deviceWidth/2+90,
            width: 80,
            height: 38,
            borderRadius: 30,
            padding: 5,
          }}
          backgroundColorOn='#ccc'
          backgroundColorOff='yellow'
          circleStyle={{
            width: 30,
            height: 30,
            borderRadius: 27.5,
            backgroundColor: 'green', // blue=>rgb(102,134,205)
          }}
          switchOn={this.state.switchOn4}
          onPress={this.onPress3}
          circleColorOff='white'
          circleColorOn='white'
          duration={500}
        />
      </ScrollView>
    );
  }
  onPress1 = () => {
    this.setState({ switchOn1: !this.state.switchOn1 });
  }
  onPress2 = () => {
    this.setState({ switchOn2: !this.state.switchOn2 });
  }
  onPress3 = () => {
    this.setState({ switchOn4: !this.state.switchOn4 });
  }
  
  goSettingScreen(){ // DetailScreen으로 화면 이동 
    this.props.navigation.navigate('SetPage'); 
}
  };
  
  const styles = StyleSheet.create({
    a_back:{
        marginTop:10,
    },
    a_font1:{
        fontSize:25,
        marginTop:-30,
        marginLeft:deviceWidth/2-30,
        borderRightColor:'rgb(20,100,100)',
        borderBottomRightRadius:20,
        
    },
    a_font2:{
        fontSize:23,
        marginTop:30,
        marginLeft:20,
        marginBottom:10,
    },
    
  });
  

  export default AlarmScreen;