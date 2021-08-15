import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MainScreen from './src/component/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
/*
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GetDate />
    </View>
  );
}
function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map!</Text>
    </View>
  );
}
function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}
function MyPageScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyPage!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#54D2AC', }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={MyPageScreen} />
    </Tab.Navigator>
  );
}
*/
const Title = () => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>TodayMeet</Text>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Title />
      <MainScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  title: {
    alignSelf: 'stretch',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center', 
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});