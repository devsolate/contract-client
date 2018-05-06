import { createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
)