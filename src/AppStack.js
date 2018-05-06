import { createStackNavigator } from 'react-navigation';
import ContractScreen from './App/ContractScreen';

const AppStack = createStackNavigator({
    Contract: ContractScreen
});

export default AppStack