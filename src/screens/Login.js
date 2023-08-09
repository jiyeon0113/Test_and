import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000);
        navigation.navigate('Home');
    };

    const handlePW_findScreen = () => {
        navigation.navigate('Pw_find');
    };

    const data = [
        { key: 'SignUp', title: '회원 가입', onPress: hanndleTermsScreen },
        { key: 'PwFind', title: '비밀번호 찾기', onPress: handlePW_findScreen },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
        style={styles.button}
        onPress={item.onPress}
        disabled={showSuccessMessage}
        >
            <Text style={styles.textButton}>{item.title}</Text>
        </TouchableOpacity>
    );

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
        <TouchableOpacity
            style={styles.mainButton}
            onPress={handleMainScreen}
            disabled={!isLoginEnabled() || showSuccessMessage}
        >
            <Text style={styles.mainButtonText}>Login</Text>
        </TouchableOpacity>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            contentContainerStyle={styles.buttonContainer}
        />
        {showSuccessMessage && (
            <Toast
            style={styles.toastContainer}
            text1="로그인 성공"
            visibilityTime={5000} // Show for 2 seconds
            />
        )}
        <Text style={styles.text}>vol.0.2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    baseText: {
        fontSize: 40,
        color: '#E5EFDF',
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#8CB972',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainButton: {
        fontSize: 20,
        borderRadius: 10,
        paddingHorizontal: 130,
        paddingVertical: 5,
        margin: 5,
        backgroundColor: '#2D5E40', // 변경: 배경색
        borderColor: '#2D5E40', // 변경: 테두리 색상
        borderWidth: 1, // 변경: 테두리 두께
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainButtonText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    text: {
        marginTop: 200,
        alignItems: 'center',
    },
    textButton: {
        fontSize: 20,
        color: 'gray',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 1,
        marginLeft: 20,
    },
    toastContainer: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#2D5E40',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
        color: '#2D5E40',
    },
    image: {
        marginBottom: 20,
    },
});

export default Login;
