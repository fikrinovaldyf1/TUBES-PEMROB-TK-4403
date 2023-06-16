import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pages/Login';
import Splash from '../pages/Splash';
import Home from '../pages/Home';
import Serial from '../pages/Serial';
import Film from '../pages/Film';
import Pengaturan from '../pages/Pengaturan';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Serial" component={Serial} />
          <Tab.Screen name="Film" component={Film} />
          <Tab.Screen name="Pengaturan" component={Pengaturan} />
        </Tab.Navigator>
    );
  };

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }}/>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default Router;

const styles = StyleSheet.create({});