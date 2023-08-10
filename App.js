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

import Magazine from './src/screens/Magazine';
import Pw_find from './src/screens/Pw_find';

import LastRecord from './src/screens/screensMypage/LastRecord';
import MyBookmark from './src/screens/screensMypage/MyBookmark';
import Myprofile from './src/screens/screensMypage/Myprofile';
import Pw_reset from './src/screens/screensMypage/Pw_reset';

import Result from './src/screens/screensPhoto/Result';

import MyRecord_bar from './src/screens/screensMypage/MyRecord_bar';

import Past_Result from './src/screens/screensResult/Past_Result';

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
                name="Magazine"
                component={Magazine}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Pw_find"
                component={Pw_find}
                options={{headerShown: false}}
                />


                <Stack.Screen
                name="LastRecord"
                component={LastRecord}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="MyBookmark"
                component={MyBookmark}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Myprofile"
                component={Myprofile}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Pw_reset"
                component={Pw_reset}
                options={{headerShown: false}}
                />

                <Stack.Screen
                name="Result"
                component={Result}
                options={{headerShown: false}}
                />

                <Stack.Screen
                name="MyRecord_bar"
                component={MyRecord_bar}
                options={{headerShown: false}}
                />

                <Stack.Screen
                name="Past_Result"
                component={Past_Result}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
