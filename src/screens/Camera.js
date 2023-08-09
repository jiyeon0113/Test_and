import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, FlatList } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Result from './screensPhoto/Result';

const Camera = ({navigation}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const openCamera = () => {
        launchCamera({ mediaType: 'photo' }, response => {
            if (!response.didCancel) {
                setSelectedImage(response.uri);
                setShowPopup(true);
            }
        });
    };

    const openGallery = () => {
        launchImageLibrary({ mediaType: 'photo' }, response => {
            if (!response.didCancel) {
                setSelectedImage(response.uri);
                setShowPopup(true);
            }
        });
    };

    const handleDiagnose = () => {
        setShowPopup(false);
        navigation.navigate('Result', { selectedImage });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openCamera}>
                <Text>카메라</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={openGallery}>
                <Text>갤러리</Text>
            </TouchableOpacity>
            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.image} />
            )}
            {showPopup && (
                <View style={styles.popup}>
                    <Text>진단하시겠습니까?</Text>
                    {selectedImage && (
                        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
                    )}
                    <View style={styles.popupButtons}>
                        <TouchableOpacity style={styles.popupButton} onPress={handleDiagnose}>
                            <Text>확인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.popupButton} onPress={() => setShowPopup(false)}>
                            <Text>취소</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#8CB972',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    },
    popup: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,
    },
    popupButtons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    popupButton: {
        backgroundColor: '#8CB972',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    selectedImage: {
        width: 150,
        height: 150,
        marginVertical: 10,
    },
});

export default Camera;
