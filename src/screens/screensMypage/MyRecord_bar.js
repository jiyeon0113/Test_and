import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyBookmark from './MyBookmark';
import LastRecord from './LastRecord';

const Tab = createMaterialTopTabNavigator();

const MyRecord_bar = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Last Record" component={LastRecord} />
        <Tab.Screen name="My Bookmark" component={MyBookmark} />
        </Tab.Navigator>
    );
};

export default MyRecord_bar;
