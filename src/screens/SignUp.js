import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignUp = ({ navigation }) => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        if (nickname && email && password && confirmPassword ) {
            if (password === confirmPassword) {
                navigation.navigate('Login');
            } else {
                console.log ('비밀번호가 일치하지 않습니다');
            }
        }else {
            console.log ('입력되지 않은 칸이 있습니다! 모두 입력해 주세요!')
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>회원 가입</Text>
                <TextInput
                    style={styles.input}
                    placeholder="닉네임"
                    value={nickname}
                    onChangeText={setNickname}
                />
                <TextInput
                    style={styles.input}
                    placeholder="이메일"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호 재확인"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.signUpButtonText}>가입하기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2D5E40',
        },
        input: {
        borderWidth: 1,
        borderColor: '#2D5E40',
        padding: 10,
        marginBottom: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: '#CBDFC0',
        },
        signUpButton: {
        backgroundColor: '#2D5E40',
        padding: 10,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginTop: 20,
        },
        signUpButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        },
});

export default SignUp;
