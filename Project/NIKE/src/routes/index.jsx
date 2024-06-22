import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import BottomTabs from '../components/BottomTab';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MyStack;
