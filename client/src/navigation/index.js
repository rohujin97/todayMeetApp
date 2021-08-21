import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChatListScreen from '../component/chat/ChatListScreen';
import ChatRoomScreen from '../component/chat/ChatRoomScreen';

const AuthStack = createStackNavigator(
    {
        ChatListScreen: {screen: ChatListScreen},
        ChatRoomScreen: {screen: ChatRoomScreen}
    },
    {
        initialRouteName: 'ChatListScreen'
    }
)

//최상단 네비게이터
const appNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
)

export default createAppContainer(appNavigator);
