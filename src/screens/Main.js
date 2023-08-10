import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyRecord_bar from './screensMypage/MyRecord_bar';
import LastRecord from './screensMypage/LastRecord';

const Main = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            title: '토마토 잎 곰팡이병',
            image: require('../../assets/tomatoleafmold1.jpg'),
            explanation: `
                잎의 일차 감염에서 꽃 (특히 종자를 생산하는 작물에서 위험) 
                ...
            `,
        },
        {
            id: '2',
            title: '토마토 황화잎말이 바이러스',
            image: require('../../assets/yellowleafcurlVirus1.jpg'),
            explanation: `
                토마토 황화잎말이병은 토마토 
                Yellow Leaf Curl Virus 
                (TYLCV)에 의하여 발생하는 바이러스병해다.
            `,
        },
    ];

    const handleMagazine = (item) => {
        navigation.navigate('Magazine', {
            title: item.title,
            image: item.image,
            explanation: item.explanation,
        });
    };

    const handleRecord = () => {
        navigation.navigate('LastRecord');
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.magazineItem}
            onPress={() => handleMagazine(item)}
        >
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.smallTitle}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.container}>
                <Text style={styles.titleText}>GreenDan</Text>
                <Text style={styles.title}>자주 발병하는 병해</Text>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <Text style={styles.container2}>나의 지난 기록</Text>
                    <TouchableOpacity onPress={() => handleRecord} style={styles.magazineContainer}>
                        <Image source={require('../../assets/yellowleafcurlVirus2.jpg')} style={styles.image2} />
                        <Text style={styles.magazineText}>2023.8.1{"\n"}진단 결과</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },
    titleText: {
        fontSize: 30,
        color: '#8CB972',
        marginBottom: 40,
    },
    title: {
        alignItems: 'center',
        color: '#2D5E40',
        fontSize: 20,
        marginBottom: 20,
    },
    image: {
        width: 180,
        height: 130,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    smallTitle: {
        width: 80,
        height: 130,
        backgroundColor: '#808080',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    magazineText: {
        width: 80,
        height: 130,
        backgroundColor: '#808080',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    magazineContainer: {
        flexDirection: 'row',
    },
    container2: {
        margin: 20,
        marginTop: 30,
        alignItems: 'center',
        color: '#2D5E40',
        fontSize: 20,
    },
    magazineContainer: {
        flexDirection: 'row',
    },
    image2: {
        width: 180,
        height: 130,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        
    },
});

export default Main;