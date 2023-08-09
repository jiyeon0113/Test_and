import React from "react";
import { View } from "react-native";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

const Magazine_one = () => {
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container_one}>
            <Text style ={ styles.Title_one}>
                자주 발병하는 병해
            </Text>
            <Text style ={ styles.subTile_one}>
                토마토 입마름병
            </Text>
            <Image source={require('../../assets/tomatoleafmold1.jpg')} style={styles.image_one} />

            <Text style = {styles.subTile_one}>
                생활사 및 발병 원인
            </Text>
            <Text style = {styles.explanation_one}>
            잎의 일차 감염에서 꽃(특히 종자를 
            생산하는 작물에서 위험) 그리고 관부로 
            전파될 수 있습니다.
            </Text>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    Title_one: {
        marginBottom: 20,
        color: '#8CB972',
        fontSize: 30,
    },
    image_one: {
        width: 300,
        height: 250,
    },
    subTile_one: {
        fontSize: 24
    },
    explanation_one: {
        fontSize: 16,
        backgroundColor: '#E5EFDF',
    },
    container_one: {
        backgroundColor: '#2D5E40',
    },
})

export default Magazine_one;