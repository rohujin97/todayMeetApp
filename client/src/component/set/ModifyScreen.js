import React, {Component,useState, useEffect } from 'react';
import {
  Dimensions,ScrollView,TouchableOpacity,Button,Platform ,Image,
    StyleSheet,Text,TextInput
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const deviceWidth = Dimensions.get('window').width

const ModifyScreen=({})=>{
  // state={
  //   job_name:""
  // };
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
    const navigation2 = useNavigation(); 
        return (
            <ScrollView style={styles.container}>
        <Text style={styles.name} >성명</Text>
        <Entypo name="circle" size={90} style={styles.circle}/>
        {image && <Image source={{ uri: image }} style={styles.imageIm} />}
        <Entypo name="image" size={25} style={styles.imageICON}
        onPress={pickImage} />
        
        
        <TextInput style={styles.container3} 
        placeholder="Name"
        />
        <Text style={styles.job}>직업</Text>
        <TextInput style={styles.container4} 
        placeholder="Job Name"
        // onChangeText={text=>this.setState({job_name:text})}
        ></TextInput>
        <Text style={styles.depart}>회사/부서</Text>
        <TextInput style={styles.container5} 
        placeholder="Company/ Department"
        />
        <Text style={styles.depart}>이메일</Text>
        <TextInput style={styles.container5}
        placeholder="  Email"/>
        <Text style={styles.depart}>회사번호</Text>
        <TextInput style={styles.container5}
        placeholder="Company number"/>
        <Text style={styles.depart}>전화번호</Text>
        <TextInput style={styles.container5}
        placeholder="Phone number"/>

        
        <TouchableOpacity style={[styles.correct_container, {backgroundColor:'#54D2AC'}]} 
        onPress={() => navigation2.navigate('SetPage')}>
          <Text style={styles.correct}>저장하기</Text>
        </TouchableOpacity>
      </ScrollView>
        );
    
}
 
const styles = StyleSheet.create({
    circle:{
      marginTop:-10,
      marginLeft:30,
    },
    imageIm:{
      width: 100, 
      height: 100,
      marginTop:-100,
      marginLeft:20,
    },
    imageICON:{
      marginTop:-20,
      marginLeft:95,
    },
    name:{
      marginTop:30,
      marginLeft:deviceWidth/2-30,
      fontSize:15,
    },
    container3:{
      height: 40,
      width: deviceWidth/2-10,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:-85, 
      marginLeft:deviceWidth/2-30,
      borderRadius:15,
    },
    job:{
      fontSize:15,
      marginTop:20,
      marginLeft:deviceWidth/2-30,
    },
    container4:{
      height: 40,
      width: deviceWidth/2-10,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:10, 
      marginLeft:deviceWidth/2-30,
      borderRadius:15,
    },
    depart:{
      fontSize:15,
      marginTop:20,
      marginLeft:30,
      
    },
    container5:{
      height: 40,
      width: deviceWidth/2+125,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      backgroundColor:'rgb(200,200,200)',
      marginTop:10, 
      marginLeft:30,
      borderRadius:15,
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
export default ModifyScreen;