import React from "react";
import { View } from "react-native";
import { Text, Image, StyleSheet } from "react-native";
import { useState } from "react";

const Magajin1 = () => {
    <View>
        <Text style ={ styles.Title}>
            자주 발병하는 병해
        </Text>
        <Text style ={ styles.subTile}>
            토마토 입마름병
        </Text>
        <Image source={require('../../assets/tomatoleafmold1.jpg')} style={styles.image} />

        <Text style = {styles.subTile}>
            생활사 및 발병 원인
        </Text>
        <Text style = {styles.explanation}>
        잎의 일차 감염에서 꽃(특히 종자를 
        생산하는 작물에서 위험) 그리고 관부로 
        전파될 수 있습니다.
        </Text>
    </View>
}

const styles = StyleSheet.create({
    Title: {
        marginBottom: 20,
        color: '#8CB972',
        fontSize: 30,
    },
    image: {
        width: 300,
        height: 250,
    },
    subTile: {
        fontSize: 24
    },
    explanation: {
        fontSize: 16,
        backgroundColor: '#E5EFDF',
    }
})

export default Magajin1;