import {View, Text, StyleSheet, Image} from 'react-native';
import * as React from 'react';
import Input, {KeyboardTypes, ReturnKeyTypes} from '../components/Input';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';


const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = email => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const isLoginEnabled = () => {
        return email.length > 0 && password.length > 0 && isEmailValid(email);
    };

    const hanndleTermsScreen = () => {
        navigation.navigate('TermsScreen');
    };

    const handleMainScreen = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
        <Image source={require('../../assets/main.png')} style={styles.image} />

        <Text style={styles.baseText}>GreenDan</Text>

        <Input
            title={'이메일'}
            placeholder="your@mail.com"
            keyboardType={KeyboardTypes.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
            value={email}
            onChangeText={text => setEmail(text)}
        />
        <Input
            title={'비밀번호'}
            returnKeyType={ReturnKeyTypes.DONE}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
        />

        <View style={{flexDirection: 'row'}}>
            <Button
            title="login"
            modeValue="text"
            onPress={handleMainScreen}
            style={styles.Button}
            disabled={!isLoginEnabled()}
            />

            <Button
            title="Sign Up"
            omodeValue="text"
            onPress={hanndleTermsScreen}
            style={styles.Button}
            />
        </View>

        <Text style = {styles.text}>
            vol.0.1
        </Text>
        </View>
    );
    };

    const styles = StyleSheet.create({
    baseText: {
        fontSize: 40,
    },
    container: {
        backgroundColor: '#8CB972',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Button: {
        backgroundColor: '#E5EFDF',
        margin: 10,
    },
    text: {
        marginTop: 200,
        alignItems: 'center',
    },
});

export default Login;
