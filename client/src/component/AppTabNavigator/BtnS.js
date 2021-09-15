import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text,Button,Dimensions, View}  from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width;

const BtnS = ({}) => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.icon}>
      <Icon name="calendar-outline" size={55} onPress={() => navigation.navigate('Calendars')}></Icon>
      <Icon name="add-circle-outline" size={55} onPress={() => navigation.navigate('MeetCreate')}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 25,
  },
});

export default BtnS;
