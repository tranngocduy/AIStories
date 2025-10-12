import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Dashboard from '@/screens/Tab.Dashboard/Dashboard';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabOptions: BottomTabNavigationOptions = { headerShown: false, lazy: false, sceneStyle: { backgroundColor: '#FFFFFF' } };
const stackOptions: NativeStackNavigationOptions = { headerShown: false, animation: 'slide_from_right', contentStyle: { backgroundColor: '#FFFFFF' } };

const AppTab = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name='Dashboard' component={Dashboard} />
    </Tab.Navigator>
  )
}

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen name='AppTab' component={AppTab} />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )

}

export default AppNavigator;
