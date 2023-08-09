import React from "react";
import { View } from "react-native";
import { Text, Image, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

const Magazine_one = () => {
    return (
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
            잎의 일차 감염에서 꽃
            {"\n"}
            (특히 종자를 생산하는 작물에서 위험) 
            {"\n"}
            그리고 관부로 전파될 수 있습니다.
            {"\n"}
            {"\n"}
            이 병원체(Alternaria)의 포자형성은 
            2~4°C부터 최고 28~30°C
            (최적의 온도는 15~28°C)의 
            온도와 90% 이상의 상대습도(RH)에서 
            발생하거나 잎이 젖은 상태에서 발생합니다. 
            {"\n"}
            {"\n"}
            종마다 최적의 온도는 작은 차이가 있지만 
            일반적으로 Alternaria 감염의 위험은 온도가 
            높고 습한 조건에서 더 큽니다. 
            {"\n"}
            {"\n"}
            감염은 수 시간 내에 발생할 수 있으며, 
            병반은 2~3일 후에 빠르게 나타나고 
            5일 내에 포자가 형성됩니다. 
            {"\n"}
            {"\n"}
            감염은 직접적 또는 상처와 기공을 
            통해서도 이뤄집니다. 포자는 바람에 의해서 
            확산되며 일부 종에서는 빗물을 따라 
            확산되기도 합니다.
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
})

export default Magazine_one;