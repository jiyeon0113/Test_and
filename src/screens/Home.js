import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {View, Button, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createMaterialBottomTabNavigator();

function Home() {
    return (
        
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#8CB972',
            }}
            >
            
            <Tab.Screen
            name="Mypage"
            component={Mypage}
            options={{
                tabBarLabel: '마이페이지',
                tabBarIcon: ({color, size}) => (
                <Icon name="account-circle" color={color} size={24} />
                ),
            }}
            />
            <Tab.Screen
            name="Kamara"
            component={Kamara}
            options={{
                tabBarLabel: '카메라',
                tabBarIcon: ({color, size}) => (
                <Icon name="add-a-photo" color={color} size={24} />
                ),
            }}
            />
            <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
                tabBarLabel: '설정',
                tabBarIcon: ({color, size}) => (
                <Icon name="dehaze" color={color} size={24} />
                ),
            }}
            />
        </Tab.Navigator> 
        );
}

function Mypage() {
    return <Text>Mypage</Text>;
}

function Kamara() {
    return <Text>Kamara</Text>;
}

function Setting() {
    return <Text>Setting</Text>;
}

export default Home;