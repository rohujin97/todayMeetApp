
import * as React from 'react'; import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import LoginScreen from './src/component/login/login'; 
import SignUpScreen from './src/component/login/signup'; 
import SignUp2Screen from './src/component/login/signup2'; 
const Stack = createStackNavigator(); 

function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="MAIN"> 
      <Stack.Screen name="MAIN" component={LoginScreen} options={{ title: '로그인' }}/>
      <Stack.Screen name="SIGNUP" component={SignUpScreen} options={{ title: '회원가입1' }}/> 
      <Stack.Screen name="SIGNUP2" component={SignUp2Screen} options={{ title: '회원가입2' }}/> 
      </Stack.Navigator> 
    </NavigationContainer> ); 
    } 

export default App;
