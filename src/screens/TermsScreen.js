import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SignUp from "./SignUp";

const TermsScreen = () => {
    const [isAllAgreed, setIsAllAgreed] = useState(false);

    const [term1Agreed, setTerm1Agreed] = useState(false);
    const [term2Agreed, setTerm2Agreed] = useState(false);

    const hanndleAgreeAll = () => {
        setIsAllAgreed(!isAllAgreed);
        setTerm1Agreed(!isAllAgreed);
        setTerm2Agreed(!isAllAgreed);
    };

    const isSignUpEnabled = term1Agreed && term2Agreed;

    const navigation = useNavigation();

    const handleTerms = () => {
        if (isSignUpEnabled) {
            console.log('이용약관에 모두 동의하였습니다. ');
            navigation.navigate('SignUp');
        } else {
            console.log('필수 약관에 모두 동의해야 합니다');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>이용약관 동의</Text>
            <View style={styles.termsContainer}>

                <TouchableOpacity
                style={[styles.term, term1Agreed && styles.agreed]}
                onPress={() => setTerm1Agreed(!term1Agreed)}>
                    <Text> 약관 1에 동의합니다</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.term, term2Agreed && styles.agreed]}
                onPress={() => setTerm2Agreed(!term2Agreed)}>
                    <Text> 약관 2에 동의합니다</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.agreeAllContainer}>
                <TouchableOpacity onPress={hanndleAgreeAll}>
                    <Text style={styles.agreeAllContainer}>
                        모든 약관에 {isAllAgreed? '동의함' : '동의하지 않음'}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
            style={[styles.signUpButton, isSignUpEnabled ? styles.enabled : styles.disabled]}
            onPress={handleTerms}
            disabled={!isSignUpEnabled}
            >
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
        padding: 20,
        backgroundColor: '#8CB972',
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        termsContainer: {
            marginBottom: 20,
        },
        term: {
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
        },
        agreed: {
            backgroundColor: '#E5EFDF', // 동의한 약관 스타일
        },
        agreeAllContainer: {
            marginBottom: 20,
        },
        agreeAllText: {
            textDecorationLine: 'underline',
        },
        signUpButton: {
            backgroundColor: '#4CAF50',
            padding: 10,
            borderRadius: 5,
            width: '100%',
            alignItems: 'center',
        },
        signUpButtonText: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
        },
        enabled: {
            opacity: 1,
        },
        disabled: {
            opacity: 0.6,
        },
    });

export default TermsScreen;
