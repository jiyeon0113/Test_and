import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Mypage = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            title: '프로필 설정',
            screen: 'Myprofil',
        },
        {
            id: '2',
            title: '나의 지난 기록',
            screen: 'LastRecord',
        },
        {
            id: '3',
            title: '나의 책갈피',
            screen: 'MyBookmark',
        },
        {
            id: '4',
            title: '비밀번호 재설정',
            screen: 'Pw_reset',
        },
    ];

    const handleNavigation = (screen) => {
        navigation.navigate(screen);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => handleNavigation(item.screen)}
        >
            <Text style={styles.buttonText}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.appName}>GreenDan</Text>
            <Text style={styles.welcomeText}>환영합니다!</Text>
            <Text style={styles.nickname}>사용자 닉네임</Text>
            <Image source={require('../../assets/profile_tomato.jpg')} style={styles.profileImage} />
            
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.buttonList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#8CB972',
    },
    appName: {
        fontSize: 30,
        color: '#E5EFDF',
        marginTop: 40,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    welcomeText: {
        fontSize: 20,
        color: '#2D5E40',
    },
    nickname: {
        fontSize: 18,
        color: '#2D5E40',
        marginBottom: 20,
    },
    buttonList: {
        marginTop: 40,
        width: '80%',
    },
    buttonContainer: {
        backgroundColor: '#2D5E40',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#E5EFDF',
    },
});

export default Mypage;
