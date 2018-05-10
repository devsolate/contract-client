import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, StatusBar, Button, ImageBackground, Image, TextInput, KeyboardAvoidingView, Keyboard, Platform, TouchableOpacity } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Stellar from '@pigzbe/react-native-stellar-sdk';
import t  from 'tcomb-form-native';
import * as Keychain from 'react-native-keychain';
const Form = t.form.Form;
import HttpClient from '../Utils/HttpClient'

let RegisterForm = t.struct({
    name: t.String,
    email: t.String,
    password: t.String
});

const formOptions = {
    auto: 'placeholders',
    stylesheet: formStyle
}

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',
            value: {
                name: 'Charuwit',
                email: 'tui2tone@gmail.com',
                password: 'coolpa',
            },
            isLoading: false
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmitForm = this.onSubmitForm.bind(this)
        this.goToLoginScreen = this.goToLoginScreen.bind(this)
    }

    async onSubmitForm() {
        console.log("submit")
        if(!this.state.isLoading) {

            const value = this.refs.form.getValue();
            
            if (value) {
                try {
                    await HttpClient.register(value.email, value.name, value.password)
                } catch(error) {
                    console.log(error)
                }
            }
        }
    }

    onChange(value) {
        this.setState({value});
    }
    
    goToLoginScreen() {
        this.props.navigation.navigate('Login')
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
                        <Form
                            ref="form"
                            type={RegisterForm}
                            onChange={this.onChange}
                            value={this.state.value}
                            options={{
                                auto: 'placeholders',
                                stylesheet: formStyle
                            }}
                            />

                        <TouchableOpacity onPress={this.onSubmitForm}>
                            <View
                                style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>
                                    Register
                                </Text>
                            </View>
                        </TouchableOpacity>

                        {/* <TouchableOpacity onPress={this.goToLoginScreen}>
                            <View
                                style={styles.loginButton}>
                                <Text style={styles.loginButtonText}>
                                    Already have account? Login
                                </Text>
                            </View>
                        </TouchableOpacity> */}
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

const formStyle = {
    textbox: {
        normal: {
            backgroundColor: '#FFF',
            borderRadius: 100,
            padding: 10,
            paddingLeft: 25,
            paddingRight: 25,
            minWidth: 250,
            borderEndWidth: 0,
            marginBottom: 10
        }
    },
    controlLabel: {
        normal: {
        },
        error: {
        }
    },
    textboxView: {
        normal: {},
        error: {},
        notEditable: {}
    },
    formGroup: {
        normal: {
        },
        error: {
        }
    },
    helpBlock: {
        normal: {
        },
        error: {
        }
    },
}


export default RegisterScreen