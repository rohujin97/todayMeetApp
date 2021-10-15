import React, { Component, useState } from 'react'; 
import { View, Text,TextInput,StyleSheet,Button,Alert,Image,KeyboardAvoidingView,ScrollView } from 'react-native'; 
import DatePicker from "react-datepicker";
import DaumPostCode from 'react-daum-postcode';
const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };
const MeetingCreate=({navigation})=>{
    const [address, setAddress] = useState('');
    const [addressDetail, setAddressDetail] = useState('');

    const [isOpenPost, setIsOpenPost] = useState(false);

    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    }
    const onCompletePost = (data) => {
        let fullAddr = data.address;
        let extraAddr = '';

        if(data.addressType === 'R')
        {
            if(data.bname !== ''){
                extraAddr += data.bname;
            }
            if (data.buildingName !== '')
            {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !=='' ? `(${extraAddr})` : '';
        }

        setAddress(data.zonecode);
        setAddressDetail(fullAddress);
        setIsOpenPost(false);
    };
    const postCodeStyle = {
        display: 'block',
        position: 'relative',
        top: '0%',
        width: '400px',
        height: '400px',
        padding: '7px',
      };
    return(

        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <ScrollView>
        <View style={{backgroundColor:'white'}}> 
            <Text style={{fontSize:22 ,textAlign:'center', margin:10,marginBottom:20}}>미팅추가</Text>
            
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="인원"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="날짜"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="시간"></TextInput>
            <TextInput style={{width:263,height:46,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="장소"></TextInput>
            <>
            {isOpenPost  ? (<DaumPostcode style={postCodeStyle} autoClose onComplete={onCompletePost } />) : null}
            </>
            <TextInput style={{width:263,height:300,borderWidth:1, marginBottom:10, borderColor:"#FFF065",color:"black", alignSelf:'center',padding:10}}placeholder="회의안건"></TextInput>

        <Button
              
        title="등록완료"
        color="#54D2AC"
        onPress={() => {
          navigation.navigate("detail");
        }}
    />      
        </View>

        </ScrollView>
        </KeyboardAvoidingView>
        
    )
    
};
export default MeetingCreate;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      backgroundColor:'white'
    },
    title: {
      textAlign: 'center',
      fontSize:18,
      marginVertical: 8,
      marginTop:10,
      marginBottom:10,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
  });