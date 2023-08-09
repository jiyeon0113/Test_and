import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';

import Camera from './Camera';
import Setting from './Setting';
import Mypage from './Mypage';
import Main from './Main';

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <>
        
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#8CB972',
                    tabBarStyle: {height: 80},
                }}>
                    <Tab.Screen
                    name="GreenDan"
                    component={Main}
                    options={{
                    tabBarLabel: '마이페이지',
                    tabBarIcon: ({color}) => (
                        <Icon name="home" color={color} size={40} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Mypage"
                    component={Mypage}
                    options={{
                    tabBarLabel: '마이페이지',
                    tabBarIcon: ({color}) => (
                        <Icon name="account-circle" color={color} size={40} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Camera"
                    component={Camera}
                    options={{
                    tabBarLabel: '카메라',
                    tabBarIcon: ({color}) => (
                        <Icon name="add-a-photo" color={color} size={40} />
                    ),
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                    tabBarLabel: '설정',
                    tabBarIcon: ({color}) => (
                        <Icon name="dehaze" color={color} size={40} />
                    ),
                    }}
                />
                
            </Tab.Navigator>
        </>
    );
}

export default Home;
