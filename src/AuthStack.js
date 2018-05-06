import { createStackNavigator } from 'react-navigation';
import LoginScreen from './Auth/LoginScreen';
import RegisterScreen from './Auth/RegisterScreen';

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    Register: RegisterScreen
});

export default AuthStack