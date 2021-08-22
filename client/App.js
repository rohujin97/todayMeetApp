import React from 'react';
// import FriendClick from './src/component/friendclick/friendclick';
// import DetailMeeting from './src/component/detailmeeting/detailmeeting'
// import BcThum from './src/component/bcthum/bcthum'
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigatior'
export default function App(){
 //getLocation = async () => {
 //  const location = await Location.getCurrentPositionAsync();
  // console.log(location);
 //};
// componentDidMount() =>{  
 //  this.getLocation();
 //}
 console.disableYellowBox = true;
return(
<NavigationContainer>
    <StatusBar style="black" />
    <StackNavigator />
</NavigationContainer>
    )

 

}
