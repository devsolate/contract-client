import React from 'react';
import SInfo from 'react-native-sensitive-info';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Keychain from 'react-native-keychain';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
      _bootstrapAsync = async () => {
        const accountData = await SInfo.getItem('users', {})
        const accounts = JSON.parse(accountData || "[]")
        if(accounts.length > 0) {
            this.props.navigation.navigate('Login');
        } else {
            this.props.navigation.navigate('Register');
        }
      };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Loading Screen</Text>
            </View>
        )
    }
}

export default AuthLoadingScreen;