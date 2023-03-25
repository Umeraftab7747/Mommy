import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import HomeScreen from '../Screens/HomeScreen';
import SplashScreen from '../Screens/SplashScreen';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import Otp from '../Screens/Otp';
import Carbooking from '../Screens/Carbooking';
import ChatScreen from '../Screens/ChatScreen';
import DriverSignup from '../Screens/DriverSignup';
import Location from '../Screens/Location';

import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="DriverSignup" component={DriverSignup} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Carbooking" component={Carbooking} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
