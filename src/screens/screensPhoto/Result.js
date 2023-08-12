import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyBookmark from '../screensMypage/MyBookmark';
import { useNavigation } from '@react-navigation/native';

const Result = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState([
        {
            id: '1',
            title: '토마토 잎 곰팡이병',
            image: require('../../../assets/tomatoleafmold3.jpg'),
            explanation: `
                잎의 일차 감염에서 꽃 (특히 종자를 생산하는 작물에서 위험) 
                ...
            `,
            date: '2023-06-10', // 날짜 정보 추가
            bookmarked: false, // 북마크 여부 추가
        },
        {
            id: '2',
            title: '토마토 황화잎말이 바이러스',
            image: require('../../../assets/yellowleafcurlVirus3.jpg'),
            explanation: `
                토마토 황화잎말이병은 토마토 
                Yellow Leaf Curl Virus 
                (TYLCV)에 의하여 발생하는 바이러스병해다.
            `,
            date: '2023-08-01',
            bookmarked: false,
        },
        {
            id: '3',
            title: '토마토 황화잎말이 바이러스',
            image: require('../../../assets/yellowleafcurlVirus5.jpg'),
            explanation: `
                토마토 황화잎말이병은 토마토 
                Yellow Leaf Curl Virus 
                (TYLCV)에 의하여 발생하는 바이러스병해다.
            `,
            date: '2023-07-12',
            bookmarked: false,
        },
    ]);

    const handleSearch = (text) => {
        setSearchText(text);
        const filteredData = data.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
        setData(filteredData);
    };

    const handleBookmark = (item) => {
        const updatedData = data.map(dataItem => {
            if (dataItem.id === item.id) {
                return { ...dataItem, bookmarked: !dataItem.bookmarked };
            }
            return dataItem;
        });
        setData(updatedData);
        
    };

    const handleResult = (item) => {
        navigation.navigate('Result_', {
            title: item.title,
            image: item.image,
            explanation: item.explanation,
            date: item.date, // 추가: 날짜 정보 전달
            bookmarked: item.bookmarked, // 추가: 북마크 여부 전달
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.magazineItem}
            onPress={() => handleResult(item)}
        >
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.smallTitle}>{item.title}</Text>
                <View style={styles.dateContainer}>
                    <View style={styles.dateBackground}></View>
                    <Text style={styles.dateText}>Date: {item.date}</Text>
                </View>
                <TouchableOpacity onPress={() => handleBookmark(item)}>
                    <Icon
                        name={item.bookmarked ? 'bookmark' : 'bookmark-border'}
                        size={24}
                        color={item.bookmarked ? 'blue' : 'gray'}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={handleSearch}
                />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <MyBookmark data={data.filter(item => item.bookmarked)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
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
        right: 20,
    },
    date: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        zIndex: 1,
    },
    dateContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    dateBackground: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // 투명한 회색 배경
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
    },
    magazineItem: {
        width: '100%',
    },
});

export default Result;

