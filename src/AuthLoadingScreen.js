import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
      }
    
      _bootstrapAsync = async () => {
        await delay(2000)
        this.props.navigation.navigate('Auth');
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