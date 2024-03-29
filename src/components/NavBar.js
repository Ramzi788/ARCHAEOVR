import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator initialRouteName='/HomeScreen'>
      <Tab.Screen name="" component={HomeScreen} />
      <Tab.Screen name="" component={SettingsScreen} />
    </Tab.Navigator>
  );
}