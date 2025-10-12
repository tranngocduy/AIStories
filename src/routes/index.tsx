import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { tabDashboardIMG } from '@/assets/image';

import Dashboard from '@/screens/Tab.Dashboard/Dashboard';

const Stack = createNativeStackNavigator();
const Tab = createNativeBottomTabNavigator();

const stackOptions: NativeStackNavigationOptions = { headerShown: false, animation: 'slide_from_right', contentStyle: { backgroundColor: '#FFFFFF' } };

const AppTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Dashboard' component={Dashboard} options={{ tabBarIcon: () => tabDashboardIMG, tabBarActiveTintColor: '#000000' }} />
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
