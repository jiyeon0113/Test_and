import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from "./src/screens/Login";
import TermsScreen from "./src/screens/TermsScreen";
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const App =() => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
                <Stack.Screen name="TermsScreen" component={TermsScreen} options={{ headerShown: false}} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false}} />
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;