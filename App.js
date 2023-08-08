import * as React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/Login';
import TermsScreen from './src/screens/TermsScreen';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import Main from './src/screens/Main';
import Mypage from './src/screens/Mypage';
import Camera from './src/screens/Camera';
import Setting from './src/screens/Setting';

import Magajin_one from './src/screens/Magajin_one';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="TermsScreen"
            component={TermsScreen}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Mypage"
            component={Mypage}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Camera"
            component={Camera}
            options={{headerShown: false}}
            />
            <Stack.Screen
            name="Setting"
            component={Setting}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name="Magagin_one"
            component={Magajin_one}
            options={{headerShown: false}}
            />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
