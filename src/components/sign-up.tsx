import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import { Auth } from 'aws-amplify';

const initSignUp = async (username: string, password: string) => {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
        });
        // console.log(user)
    } catch (error) {
        console.error('Error during sign up: ', error);
    }
}

const confirmSignUp = async (username: string, code: string) => {
    try {
        await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.error('Error during sign up confirmation: ', error);
    }
}

export const SignUp = () => {
    // if null -> error: arg of type string not assignable to param undefined
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [needsConfirmation, setNeedsConfirmation] = useState(false);
    const [authCode, setAuthCode] = useState('');

    return (
        <View>
            <TextInput placeholder='Enter email' onChangeText={text => setEmail(text)}/>
            <TextInput placeholder='Enter password' onChangeText={text => setPassword(text)}/>
            <Button title='Init Auth' onPress={() => {initSignUp(email, password)}} />
            <TextInput placeholder='Auth Code' onChangeText={text => setAuthCode(text)} />
            <Button title='Confirm Auth' onPress={() => confirmSignUp(email, authCode)} />
        </View>
    );
}