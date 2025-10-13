import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { createBottomTabNavigator, BottomTabNavigationOptions, BottomTabBarProps } from '@react-navigation/bottom-tabs';

import TabNavigator from '@/components/TabNavigator';

import Library from '@/screens/Tab.Library/Library';
import Dashboard from '@/screens/Tab.Dashboard/Dashboard';
import SavedStory from '@/screens/Tab.SavedStory/SavedStory';
import UserProfile from '@/screens/Tab.UserProfile/UserProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const tabOptions: BottomTabNavigationOptions = { headerShown: false, lazy: false, sceneStyle: { backgroundColor: '#FFFFFF' } };
const stackOptions: NativeStackNavigationOptions = { headerShown: false, animation: 'slide_from_right', contentStyle: { backgroundColor: '#FFFFFF' } };

const AppTab = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions} tabBar={(props: BottomTabBarProps) => <TabNavigator {...props} />}>
      <Tab.Screen name='Dashboard' component={Dashboard} />
      <Tab.Screen name='Library' component={Library} />
      <Tab.Screen name='SavedStory' component={SavedStory} />
      <Tab.Screen name='UserProfile' component={UserProfile} />
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
