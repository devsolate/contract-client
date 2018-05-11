import React from 'react';
import { StyleSheet, Text, Picker, View, ScrollView, StatusBar, Button, ImageBackground, Image, TextInput, KeyboardAvoidingView, Keyboard, Platform, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import SInfo from 'react-native-sensitive-info';
import * as Keychain from 'react-native-keychain';
import Aes from 'react-native-aes-crypto'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',
            email: '',
            password: '',
            accounts: []
        };

        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.goToRegisterScreen = this.goToRegisterScreen.bind(this)
    }

    async componentDidMount() {
        const accountData = await SInfo.getItem('users', {})
        const accounts = JSON.parse(accountData || "[]")

        this.setState({
            accounts,
            email: accounts.length > 0 ? accounts[0] : ''
        })
    }

    async onSubmitForm() {
        try {
            const { email, password } = this.state
            console.log("email", email)
            console.log("password", password)

            const credentials = await Keychain.getGenericPassword({
                service: email
            });

            console.log("credentials", credentials)
            
            var text = await Aes.decrypt(credentials.password, password, 'aes-256-ctr');
            console.log(decrypt)
        } catch(error) {
            console.log(error)
        }
    }
    
    goToRegisterScreen() {
        this.props.navigation.navigate('Register')
    }

    render() {
        const { accounts } = this.state
        return (
                <ImageBackground source={require('../bg.png')} style={styles.container}>
                <StatusBar
                    backgroundColor="#359CD6"
                    barStyle="light-content"
                />
                <KeyboardAvoidingView style={styles.viewContainer} keyboardVerticalOffset={-500} behavior="padding" enabled>
                    <AutoHeightImage
                        width={120}
                        style={styles.logo}
                        source={require('../logo-white.png')}
                    />
                    <View
                        width={140}
                        style={styles.formContainer}>
                        <View
                            width={250}
                            style={styles.formPickerContainer}>
                            <Picker
                                selectedValue={this.state.email}
                                style={styles.formPicker}
                                onValueChange={(itemValue, itemIndex) => this.setState({email: itemValue})}>
                                {
                                    accounts.map((item, index) => {
                                        return (
                                            <Picker.Item label={item} value={item} key={item} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                        <TextInput
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                            style={styles.formInput}
                            placeholder={'Password'}
                            textAlign={'center'}
                            secureTextEntry={true}
                            underlineColorAndroid={'transparent'}
                        />

                        <TouchableOpacity onPress={this.onSubmitForm}>
                            <View
                                style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>
                                    Login
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.goToLoginScreen}>
                            <View
                                style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>
                                    Register
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            </KeyboardAvoidingView>
                </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 40
    },
    formInput: {
        backgroundColor: '#FFF',
        borderRadius: 100,
        padding: 10,
        minWidth: 250,
        borderEndWidth: 0,
        marginBottom: 10
    },
    formPickerContainer: {
        backgroundColor: '#FFF',
        borderRadius: 100,
        paddingLeft: 20,
        paddingRight: 20,
        minWidth: 250,
        borderEndWidth: 0,
        marginBottom: 10
    },
    formPicker: {
        padding: 10,
        paddingLeft: 40,
        minWidth: 230,
        borderEndWidth: 0
    },
    submitButton: {
        backgroundColor: '#0CCE6B',
        borderRadius: 100,
        padding: 20,
        minWidth: 250,
        borderEndWidth: 0,
        marginTop: 30,
        marginBottom: 10
    },
    submitButtonText: {
        color: '#FFFFFF',
        textAlign: 'center'
    },
    loginButton: {
        marginTop: 10,
        minWidth: 250,
    },
    loginButtonText: {
        color: '#FFFFFF',
        textAlign: 'center'
    }
});

export default LoginScreen