import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View style={styles.title}>
        <Text style={styles.titleText}>GreenDan</Text>

        <Text style={styles.container}>자주 발병하는 병해</Text>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => {}}>
            <Image
                source={require('../../assets/tomatoleafmold1.jpg')}
                style={styles.image}></Image>
            <Text style={styles.smallTitle}>토마토 잎마름병</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    titleText: {
        fontSize: 30,
        color: '#8CB972',
        marginBottom: 40,
    },
    subtitleText: {
        fontSize: 24,
    },
    container: {
        alignItems: 'center',
        color: '#2D5E40',
        fontSize: 20,
        marginBottom: 20,
    },
    image: {
        width: 130,
        height: 180,
    },
    smallTitle: {
        width: 130,
        backgroundColor: '#808080',
        alignItems: 'center',
        fontSize: 15,
    },
});

export default Home;
