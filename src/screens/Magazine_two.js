import React from "react";
import { View } from "react-native";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Magazine_two = ({navigation}) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container_one}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={30} color="#2D5E40" />
            </TouchableOpacity>

            <Text style ={ styles.Title_one}>
                자주 발병하는 병해
            </Text>
            <Text style ={ styles.subTile_one}>
            토마토 황화잎말이 바이러스
            </Text>
            <Image source={require('../../assets/yellowleafcurlVirus1.jpg')} style={styles.image_one} />

            <Text style = {styles.subTile_one}>
                생활사 및 발병 원인
            </Text>
            <Text style = {styles.explanation_one}>
            토마토 황화잎말이병은 토마토 
            Yellow Leaf Curl Virus 
            (TYLCV)에 의하여 발생하는 바이러스병해다.
            </Text>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    Title_one: {
        flex: 1,
        margin: 30,
        color: '#8CB972',
        fontSize: 30,
        fontWeight: 'bold',
    },
    image_one: {
        width: 300,
        height: 250,
        alignItems: 'center',
        borderRadius: 10,
    },
    subTile_one: {
        fontSize: 24,
        color: '#2D5E40',
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        
    },
    explanation_one: {
        fontSize: 16,
        backgroundColor: '#E5EFDF',
        borderRadius: 10,
        color: '#2D5E40',
        borderWidth: 1,
        borderColor: '#2D5E40',
        width: 300,
    },
    container_one: {
        padding: 10,
        alignItems:'center',
    },
    backButton: {
        position: 'absolute',
        top: 45,
        right: 30,
        zIndex: 1,
    },
})

export default Magazine_two;