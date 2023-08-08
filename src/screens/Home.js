import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import Mypage from './Mypage';

const Tab = createBottomTabNavigator();

const Home = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>GreenDan</Text>

            <Text style={styles.container}>자주 발병하는 병해</Text>

            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => {}} style={styles.magajin}>
                    <Image
                        source={require('../../assets/tomatoleafmold1.jpg')}
                        style={styles.image}></Image>
                    <Text style={styles.smallTitle}>토마토 잎마름병</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={styles.magajin}>
                    <Image
                        source={require('../../assets/yellowleafcurlVirus1.jpg')}
                        style={styles.image}></Image>
                    <Text style={styles.smallTitle}>토마토 잎마름병</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.container2}>나의 지난 기록</Text>
            <TouchableOpacity onPress={() => {}} style={styles.magajin}>
                <Image
                    source={require('../../assets/yellowleafcurlVirus2.jpg')}
                    style={styles.image2}>
                </Image>
            </TouchableOpacity>

            <NavigationContainer independent={true}>
                <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Mypage" component={Mypage} />
                </Tab.Navigator>
            </NavigationContainer>
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
    container2: {
        marginTop: 30,
        alignItems: 'center',
        color: '#2D5E40',
        fontSize: 20,
    },
    image: {
        width: 130,
        height: 180,
    },
    image2:{
        width: 300,
        height: 250,
    },
    smallTitle: {
        width: 130,
        backgroundColor: '#808080',
        alignItems: 'center',
        fontSize: 15,
    },
    magajin: {
        margin: 20,
    }
});

export default Home;
