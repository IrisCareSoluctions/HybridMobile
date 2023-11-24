import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Dashboard from '../screens/homePage/HomePage';
import WeatherWidget from '../service/WeatherWidget';
import Camera from '../screens/analisis/Camera';

import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Nav() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#40a742",
                    borderTopColor: 'transparent',
                    borderTopLeftRadius: 25,
                    borderTopRightRadius: 25,
                    height: 55,
                    fontColor: "#204721",
                },
                tabBarActiveTintColor: "#ffffff",
                tabBarInactiveTintColor: "#204721",
                tabBarItemStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                },
            }}
        >
            <Tab.Screen name='Dashboard' component={Dashboard}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name='Camera' component={Camera}
                options={{
                    tabBarLabel: 'Galeria',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="collections" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name='Camera' component={Camera}
                options={{
                    tabBarLabel: 'Supply Chain',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="CodeSandbox" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name='Camera' component={Camera}
                options={{
                    tabBarLabel: 'SoloAnalysis',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="agriculture" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen name='Camera' component={Camera}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="chat" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen name='WeatherWidget' component={WeatherWidget}
                options={{
                    tabBarLabel: 'Localização',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="room" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>

    );
}
