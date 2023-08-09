import React from "react";
import { Image, StyleSheet, Text, Button, View, TouchableOpacity } from "react-native";
import Input, {KeyboardTypes, ReturnKeyTypes} from '../components/Input';
import { useState } from "react";

const Pw_find = () => {
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);

    const isEmailValid = email => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    };

    const handleSendResetEmail = async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            setIsEmailSent(true);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Image
            source={require('../../assets/main.png')}
            style={[styles.image, { opacity: 0.5}]}></Image>
            <Text style={styles.baseText}>GreenDan</Text>
            {!isEmailSent ? (
                <>
                    <Input
                        title={'이메일'}
                        placeholder="your@mail.com"
                        keyboardType={KeyboardTypes.EMAIL}
                        returnKeyType={ReturnKeyTypes.GO}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />

                    <TouchableOpacity
                        onPress={handleSendResetEmail}
                        disabled={!isEmailValid(email)}
                    >
                        <Text style={styles.textButton}>
                            비밀번호 찾기
                        </Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.text}>
                    이메일이 전송되었습니다. 이메일을 확인하여 비밀번호 재설정을 완료하세요.
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 150,
        backgroundColor: '#8CB972',
        margin: 20,
        padding: 10,
        borderRadius: 10,
        },
        
    baseText: {
        flex: 1,
        fontSize: 30,
        color: '#E5EFDF',
        fontWeight: 'bold',
        margin: 20,
        
        },
    text: {
        fontSize: 20,
        
    },
    image: {
        borderRadius: 1,
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
        borderColor: '#2D5E40',
        borderWidth: 1,
        paddingHorizontal: 85,
        paddingVertical: 7,
        margin: 10,
        backgroundColor: '#2D5E40',
        color: '#E5EFDF',
    },
});

export default Pw_find;