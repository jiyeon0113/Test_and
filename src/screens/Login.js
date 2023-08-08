import {  View, Text, StyleSheet, Image } from "react-native";
import * as React from 'react';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login = ( ) =>  {
    const navigation = useNavigation();

    const hanndleTermsScreen = () => {
        navigation.navigate('TermsScreen');
    };

    return(
        <View style={styles.container}>            
            <Image
            source={require('../../assets/main.png')}
            style={styles.image}
            />

            <Text style={styles.baseText}>
                GreenDan
            </Text>

            <Input 
                title={'이메일'} 
                placeholder="your@mail.com" 
                keyboardType={KeyboardTypes.EMAIL}
                returnKeyType={ReturnKeyTypes.NEXT}
                />
            <Input title={'비밀번호'} 
                returnKeyType={ReturnKeyTypes.DONE}
                secureTextEntry
                />

                <Button
                title="login"
                modeValue='text'
                />

                <Button
                title="Sign Up"
                omodeValue='text'
                onPress={hanndleTermsScreen}
                />
            </View>
    );    
}

const styles = StyleSheet.create({
    baseText: {
        fontSize: 40,
    },
    container: {
        backgroundColor: '#8CB972',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: 'E5EFDF',
        margin: 24,
    }
});

export default Login;