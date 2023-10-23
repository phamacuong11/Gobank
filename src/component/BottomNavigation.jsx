import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from '../Screen/HomeScreen';
import CardsScreen from '../Screen/CardsScreen';
import ProfileScreen from '../Screen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigation({ navigaton, route }) {


    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: '#00405d' },
            headerTintColor: '#fffa37',
            headerTitleStyle: { fontWeight: 'bold' },
            tabBarActiveTintColor: '#1769ff',
            tabBarInactiveTintColor: '#000000',
            inactiveTintColor: 'gray',
            headerShown: false,
        })} >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                tabBarActiveTintColor="blue"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home-outline' size={size} color={color} />
                    )
                }} />
            <Tab.Screen
                name="Finance"
                component={View}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='analytics-outline' size={size} color={color} />
                    )
                }} />
            <Tab.Screen
                name="Cards"
                component={CardsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='card-outline' size={size} color={color} />
                    )
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                size={23}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='person-outline' size={size} color={color} />
                    )
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})