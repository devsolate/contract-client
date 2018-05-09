import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, Button, ImageBackground, Image, TextInput, KeyboardAvoidingView, Keyboard, Platform, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',
            name: '',
            email: '',
            password: ''
        };

        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.goToRegisterScreen = this.goToRegisterScreen.bind(this)
    }

    onSubmitForm() {

    }
    
    goToRegisterScreen() {
        this.props.navigation.navigate('Register')
    }

    render() {
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
                        <TextInput
                            onChangeText={(text) => this.setState({email: text})}
                            value={this.state.email}
                            style={styles.formInput}
                            placeholder={'Email'}
                            textAlign={'center'}
                            underlineColorAndroid={'transparent'}
                        />
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

                        <TouchableOpacity onPress={this.goToRegisterScreen}>
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

export default RegisterScreen